import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../Atoms';
import Moment from 'react-moment';
import { FaRegTimesCircle } from 'react-icons/fa';

function Comments() {
  const user = useRecoilValue(userAtom);
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const [comment, setComment] = useState({
    name: user.name,
    desc: '',
    mal_id: id,
    email: user.email,
  });
  const [delComment, setDeleteComment] = useState();

  const submitComment = async (e) => {
    let url = `/comment/${id}`;
    try {
      const res = await axios.post(url, comment);
      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async () => {
    let url = `/comment/${delComment.mal_id}/${delComment._id}`;

    try {
      const res = await axios.delete(url);
      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      let url = `/comment/${id}`;
      try {
        const res = await axios.get(url);
        setComments(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, [id]);

  return (
    <div className=" max-w-lg ml-6 md:max-w-3xl md:mx-auto mt-10">
      <h1 className="font-semibold text-xl text-center">Comment section</h1>
      <div className="my-10 max-w-full space-x-2 mx-4 flex items-center justify-center">
        {/* Comment input area */}
        <div className="avatar">
          <div className=" w-20 rounded-2xl">
            <img src={user.avatar} alt={user.name} />
          </div>
        </div>

        <textarea
          className="textarea textarea-primary w-96 h-20"
          placeholder="Add a comment..."
          onChange={(e) => setComment({ ...comment, desc: e.target.value })}
        ></textarea>
        <button className="btn btn-primary btn-sm" onClick={submitComment}>
          Submit
        </button>
      </div>

      {comments.length > 0 ? (
        comments
          .map((el, i) => (
            <div
              className="mb-4 overflow-y-hidden shadow-lg border-b-2 rounded-lg group cursor-pointer relative"
              key={i}
            >
              <div className="px-4 flex justify-between ">
                <h1 className="text-lg font-semibold">{el.name}: </h1>

                <div className="space-x-2">
                  <FaRegTimesCircle
                    className="cursor-pointer hidden group-hover:inline text-primary z-10"
                    onClick={() => {
                      setDeleteComment({
                        mal_id: el.mal_id,
                        _id: el._id,
                      });
                      deleteComment();
                    }}
                  />
                  <Moment fromNow className="text-xs font-light">
                    {el.updatedAt}
                  </Moment>
                </div>
              </div>

              <div className="px-4  pb-2">
                <p className="text-sm">{el.desc}</p>
              </div>
            </div>
          ))
          .reverse()
      ) : (
        <div className="w-full mx-auto px-4  pb-2 shadow-lg ">
          {/* No comments available */}
          <h1 className="text-center">
            No comment added yet, be the first to do it!..
          </h1>
        </div>
      )}
    </div>
  );
}

export default Comments;
