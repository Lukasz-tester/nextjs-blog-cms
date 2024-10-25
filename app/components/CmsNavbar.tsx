import Link from "next/link";
import { BackArrowIcon, LogoIcon } from "./Icons";

const CmsNavbar = () => {
  return (
    <div className="flex justify-between items-center py-1 px-5">
      <Link href="/">
        <BackArrowIcon />
      </Link>
      <div>
          <LogoIcon />
      </div>
    </div>
  );
};

export default CmsNavbar;
