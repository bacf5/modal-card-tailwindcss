/* eslint-disable jsx-a11y/anchor-is-valid */
import Photo from '../images/bruno-picture.jpg';

function Info() {
  return (
    <div>
      <img
        className="rounded-t-lg w-18 h-18 mb-2 "
        src={Photo}
        alt="This is Bruno"
      />
      <h2 className="text-xl font-medium text-center">Bruno Caruso</h2>
      <h4 className="text-center font-normal text-slate-700">
        Frontend Developer
      </h4>
      <h5 className="text-center underline decoration-sky-500 hover:text-sky-600">
        bacf-blog.vercel.app/
      </h5>
      <div className="mt-4 container mx-auto flex items-center justify-around">
        <button className="rounded-lg bg-orange-200 px-6 py-2 m-2 font-medium shadow-lg flex hover:bg-orange-400 ">
          <a
            onClick={() =>
              (window.location = 'mailto:brunoagustincarusofassa@gmail.com')
            }
          >
            Email
          </a>

          <svg
            class="w-6 h-6 ml-2 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
        </button>

        <button className="rounded-lg bg-blue-200 px-6 py-2 m-2 font-medium shadow-lg flex hover:bg-blue-400 ">
          <a
            href="https://www.linkedin.com"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Linkedin
          </a>
          <svg
            class="w-5 h-6 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Info;
