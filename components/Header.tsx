import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="justify-center mt-2 mb-2 ml-2 mr-2 shadow-lg navbar bg-base-200 rounded-box">
      <Link href="/">
        <a>
          <div className="flex-none">
            <div className="w-10 h-10 m-1 rounded-full">
              <Image
                src="/static/hacktoberfest.png"
                width={50}
                height={50}
                alt="Hacktoberfest"
                blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPsrQcAAZ8BDlpDGcMAAAAASUVORK5CYII="
                placeholder="blur"
              />
            </div>
          </div>
          <div className="flex-1 px-2 mx-auto">
            <span className="text-2xl font-bold text-center">
              Hacktoberfest Projects
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Header;
