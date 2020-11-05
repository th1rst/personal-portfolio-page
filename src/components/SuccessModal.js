import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Text } from "../components/Multilanguage/Text";

export default function SuccessModal() {
  return (
    <>
      <div className="absolute w-full flex flex-row justify-end">
        <div class="mb-40 text-center py-4 lg:px-4">
          <div
            class="p-2 bg-green-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span class="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3">
              <AiOutlineCheck size={12} className="text-white" />
            </span>
            <span class="font-semibold mr-2 text-left flex-auto">
              <Text tid="successModalText" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
