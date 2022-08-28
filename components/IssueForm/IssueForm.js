import Image from "next/image";
import React, { useState } from "react";
import Form from "../Common/Form";
import InputText from "../Common/InputText";
import TextArea from "../Common/TextArea";

const IssueForm = ({ onClose, onSubmit }) => {
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [allTags, setAllTags] = useState([]);

  const addTag = (tag) => {
    setTags([...tags, tag]);
    setAllTags(allTags.filter((t) => t.id !== tag.id));
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t.id !== tag.id));
    setAllTags([...allTags, tag]);
  };

  const handleSubmit = () => {
    
  }

  return (
    <div
      id="default-modal"
      aria-hidden="true"
      className="hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center"
    >
      <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
        <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
          <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
              Create a Ticket for the issue you are facing
            </h3>
            <button
              onClick={onClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <Form handleSubmit={onSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <InputText
                id="issue-title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                label={title}
                placeholder="Enter title for your issue"
              />
              <TextArea
                id="issue-description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                label={description}
                placeholder="Enter description for your issue"
              />
              {/* List tags */}
              <div className="flex flex-wrap -m-1">
                {allTags.map((tg) => (
                  <span
                    key={`all-tags-${tg.id}`}
                    className="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300"
                  >
                    {tg.name}
                    <Image
                      onClick={() => addTag(tag)}
                      src={"./plus-svg.svg"}
                      alt="Add tag"
                      width={20}
                      height={20}
                    />
                  </span>
                ))}
              </div>
              {/* show selected tags list */}
              <div className="flex flex-wrap -m-1">
                {tags.map((tg) => (
                  <span
                    key={`tags-added-${tg.id}`}
                    className="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300"
                  >
                    {tg.name}
                    <svg
                      onClick={() => removeTag(tag)}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 sm:h-4 sm:w-4 ml-4 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-end space-x-2 items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-toggle="default-modal"
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default IssueForm;
