import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalAtom, userAtom } from '../Atoms';
import Modal from 'react-modal';
import axios from 'axios';

function UpdateInfoModal() {
  const [open, setOpen] = useRecoilState(modalAtom);
  const [user, setUser] = useRecoilState(userAtom);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState('');
  const [update, setUpdate] = useState({
    name: user.name,
    lastName: user.lastName,
    birthday: user.birthday,
    language: user.language,
    country: user.country,
  });

  const onChange = (e) => {
    setUpdate({
      ...update,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    if (loading) return;
    setLoading(true);

    if (file) {
      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'upload');
        const uploadFile = await axios.post(
          'https://api.cloudinary.com/v1_1/dipryi3mp/image/upload',
          formData
        );
        setUpdate({ ...update, avatar: uploadFile.data.url });
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const res = await axios.put(`/user/${user._id}`, update);
      localStorage.setItem('token', JSON.stringify(res.data));
      setLoading(false);
      setUser(res.data);
      setOpen(false);
      console.log(res.data, 'recieved data');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md focus:ring-0"
      >
        <div className="flex flex-col justify-center items-center h-[100%] space-y-2">
          <h1 className="text-xl text-black ">Update Profile Information</h1>
          <input
            type="text"
            className="input bg-transparent w-full border-gray-400   text-center"
            placeholder="Name.."
            name="name"
            onChange={onChange}
          />

          <input
            type="text"
            className="input bg-transparent w-full border-gray-400   text-center"
            placeholder="Last Name.."
            name="lastName"
            onChange={onChange}
          />
          <input
            type="text"
            className="input bg-transparent w-full border-gray-400   text-center"
            placeholder="Birthday.."
            name="birthday"
            onChange={onChange}
          />
          <input
            type="text"
            className="input bg-transparent w-full border-gray-400   text-center"
            placeholder="Language.."
            name="language"
            onChange={onChange}
          />
          <input
            type="text"
            className="input bg-transparent w-full border-gray-400   text-center"
            placeholder="Country.."
            name="country"
            onChange={onChange}
          />
          <input
            type="file"
            className="file-input file-input-ghost w-full max-w-xs"
            name="avatar"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button
            className={
              !loading
                ? 'btn bg-primary btn-wide '
                : 'btn bg-primary btn-wide loading'
            }
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default UpdateInfoModal;
