import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activated, setActivated] = useState(false);
  const send = async () => {
    setActivated(true);
    try {
      const res = await fetch("/api/send");
      setActivated(true);
    } catch (error) {
      setActivated(false);
    }
  };

  return (
    <div className="w-screen h-screen overflow-auto flex flex-col">
      <Head>
        <title>Nobele Joostsloopalarm</title>
      </Head>
      <div className="flex-1">
        <div className="container mx-auto p-6">
          <div className="text-5xl font-semibold mb-3">Joost-Sloopalarm</div>
          <div className="text-2xl">Direct informatie bij een escalatie.</div>
          <button
            disabled={activated}
            className="px-6 py-3 bg-black text-yellow-400 rounded-full text-lg font-semibold flex space-x-3 items-center mt-8 hover:bg-yellow-400 hover:text-black disabled:cursor-not-allowed disabled:hover:bg-black disabled:hover:text-yellow-400"
            onClick={send}
          >
            {activated ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <span>Luid het alarm</span>
          </button>
        </div>
      </div>

      <div className="w-full h-24 pattern text-yellow-400"></div>
    </div>
  );
}
