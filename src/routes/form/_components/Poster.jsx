import posterImage from '../../../assets/form/formPosterImage.png';

export default function Poster() {
  return (
    <div className="w-full max-w-[600px] px-2">
      <div className="flex w-full relative justify-evenly px-1">
        <div className="absolute left-0 bottom-0 h-[70%] w-full bg-[#36A187] -z-[1] rounded-3xl"></div>
        <div className="flex-1 h-auto flex items-end">
          <div className="h-[70%] pl-3 py-3 flex items-center">
            <p className="poster-text font-medium text-2xl md:text-3xl lg:text[2rem] text-white">
              We will help you settle your Debt amount at only{' '}
              <span className="font-bold">50%</span>
            </p>
          </div>
        </div>
        <div>
          <img
            src={posterImage}
            alt=""
            className="-scale-x-100 max-w-[min(35vw,250px)]"
          />
        </div>
      </div>
      <Tagline />
    </div>
  );
}

function Tagline() {
  return (
    <div className="flex justify-center h-20">
      <span className="quotes self-start font-inria text-[#FFD38752] text-6xl h-12">
        &quot;
      </span>
      <span className="font-kite text-center text-lg self-center text-[#36A187]">
        Loan settle karo apne Terms par
      </span>
      <span className="quotes self-end font-inria text-[#FFD38752] text-6xl h-12">
        &quot;
      </span>
    </div>
  );
}
