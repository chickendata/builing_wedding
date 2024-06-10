import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

function Expand() {
  const [user, setUser] = useState({
    id_user: "",
  });
  const navi = useNavigate();

  useEffect(() => {
    const storeData = localStorage.getItem("user");
    if (storeData) {
      const data = JSON.parse(storeData);
      setUser(data);
    }
  }, []);
  const handleRedirect = (value: string) => {
    if (value === "baby") {
      navi(`/expand/${user.id_user}/create`);
    }
  };

  return (
    <div className="bg-[#C2E9F0] w-full md:h-[588px] flex justify-center relative">
      <div className="absolute left-[23%] top-[50%] -translate-y-[50%] mr-8 h-[60px] w-[60px] text-center my-[auto] bg-[#fff] rounded-full flex justify-center items-center hover:cursor-pointer hover:w-[70px] hover:h-[70px]">
        {/* left arrow */}
        <svg
          width="18"
          height="60"
          viewBox="0 0 32 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.8409 1.17157C32.3864 2.73367 32.3864 5.26633 30.8409 6.82843L7.91512 30L30.8409 53.1716C32.3864 54.7337 32.3864 57.2663 30.8409 58.8284C29.2953 60.3905 26.7895 60.3905 25.244 58.8284L2.31828 35.6569C-0.772771 32.5327 -0.772763 27.4673 2.31828 24.3431L25.244 1.17157C26.7895 -0.390525 29.2953 -0.390525 30.8409 1.17157Z"
            fill="#6F767E"
          />
        </svg>
      </div>
      <div className="text-center bg-[#fff] w-[40%] rounded-[40px] my-8 relative flex flex-col justify-center items-center">
        {/* arrow parents to baby */}
        <svg
          width="152"
          height="202"
          viewBox="0 0 152 202"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[70px] h-auto absolute top-[16%] left-[35%]"
        >
          <path
            d="M73.758 78.6765C60.1161 90.1044 24.6472 123.817 5.54667 101.342C-13.5516 69.8761 34.1096 60.0417 49.2025 76.6194C57.3869 85.6089 89.5834 150.788 98.3146 159.778C109.229 171.016 112.967 173.263 129.337 180.005"
            stroke="#222222"
            stroke-linecap="round"
          />
          <path
            d="M69.4127 82.4249C73.6606 79.3588 77.6387 74.7255 80.9721 68.9619C84.3056 63.1983 86.8845 56.4941 88.4659 49.4812C90.0472 42.4683 90.579 35.3777 90.0109 28.8778C89.4428 22.3778 87.7937 16.6826 85.219 12.3289"
            stroke="#222222"
            stroke-linecap="round"
          />
          <path
            d="M131.91 161.827L142.843 185.607L113.975 194.613"
            stroke="#222222"
          />
        </svg>

        <img
          className="h-[40%] w-[40%] object-fit mt-16"
          alt="baby_img"
          src="https://s3-alpha-sig.figma.com/img/05eb/cb0d/0261f2ed1fb40127ce36e210e9b87a30?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ORpLi~yZUgHDe4WXylbEp1RVVKqxXE8wsVOjjqxqKrM7cYEYd90wsFdgTCuFqByEmNOAEiLxC1TEAOWv~1rc3TydefQSZdBMX8Qn~SUQqdPYEKm5Vudhf2bNQHGk3UKGL8HIxVsbyBEcqCUjWquSfVAnmKpSWnp7V7zOHlgXbv7Nwcwsgv3loh6xpjvP2adTj4JsoeJCUfPVbgWEEZJCSnBUxn3r-Hdw3V66NR9AF98D23uVSo4xLaozdmR6YAZQvRzEBlg1olvV2o3qODIzbcVb3xusj2YPvu~bk8R3qtYoGQ4V3USHuvhDYSIoLK8BNNE1bjpxK3xO0hrWK0FzSw__"
        />

        <span className="text-[500] text-[#009DC4] text-lg text-center">
          Khám phá xem con của bạn trong tương lai trông như thế nào?
        </span>
        <img
          className="absolute top-8 w-[100px] rounded-[100%] h-[100px] object-cover left-[18%]"
          src="https://s3-alpha-sig.figma.com/img/b8df/404b/00c9996943a0de9d05fd8bcde2989b2e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dwADUreMYG-v7Zla~O2bfyjBn72N1SmM7Y6xlLsY~9zRH4xNOArDHCes4kat6VwJpZJWXfY3dYlaaFxmvdfFwhCRcXTvwLRErSKnoY2pcJmk2BDDnHAJu2cf3-WE8Fo4HGmwgjzUegRdVlgjcSXw5sVnrGO8fIehvVBA9hIlNcjk-IpsBFTxhz1l2D-~-7PDfu3wmtL~fzi5YCFzKuZCkgkN5Ov2Syy0Fx10nGEvJwdWedFWUEoQdc6NYbyGjQkgpTBKFDPd7WiseDLvzl8FoSabY15N1OrqXogJTPWnhoDMfYlb6Cq6zlePiba2GDyhQGhz0fMG0t0SNQlqUllYEQ__"
          alt="anh_trai"
        />
        <img
          className="absolute top-0 w-[100px] rounded-[100%] h-[100px] object-cover left-[31%]"
          src="https://s3-alpha-sig.figma.com/img/5fe2/36c9/21342718838a24ba29f890cbe23a15d0?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RfIuTn1bR1mMVRmUaDPAMgX0uPcuHjsBpSjnNa-dE2diaq7ROo-MfNehatRdXYScMMp5-aT5~K2pN0pJZdtVMvkzm8O2MsO1Hrr9xWJFTpNrn3xaN0XiDwJ7f1ixCJZtWHKkVwuJzPoxylR04-qoPTkkrIFewLNtZD1ANOTrW1PYpbKiO2BYM~Ew90FsN2utH4iWCpm0-ps~iJjT6EgDMvo0sE4poQsznQRD24goNLKKBCggjJYZtZxRu68jJxW~l23LgqAgzAaJcS8PefRRWhoW~7V~Z5ZlEMwcEQ1KX2iHYSgdhZXT3HttIRzgr9HBPEBIg4AdYPDxttsMZwfGUg__"
          alt="anh_gai"
        />
        <Button
          variant={"cus4"}
          className="absolute bottom-8 w-[200px]"
          onClick={() => handleRedirect("baby")}
        >
          <span className="mr-2">Khám phá ngay</span>
          {/* arrow go next */}
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51 36H9"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M65.6427 35.7856L52.2116 27.727C51.6784 27.407 51 27.7911 51 28.413V43.587C51 44.2089 51.6784 44.593 52.2116 44.273L65.6427 36.2144C65.8045 36.1173 65.8045 35.8827 65.6427 35.7856Z"
              fill="white"
            />
          </svg>
        </Button>
        {/* button close */}
        <button
          type="button"
          className="absolute top-2 right-[8%] bg-[#9F9F9F] w-[30px] h-[30px] rounded-full p-2 inline-flex items-center justify-center text-gray-400"
          onClick={() => navi("/")}
        >
          <svg
            className="h-6 w-6 text-[#fff]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="absolute right-[23%] top-[50%] -translate-y-[50%] ml-8 h-[60px] w-[60px] text-center my-[auto] bg-[#fff] rounded-full flex justify-center items-center hover:cursor-pointer hover:w-[70px] hover:h-[70px]">
        <svg
          width="20"
          height="60"
          viewBox="0 0 32 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.15914 58.8284C-0.386381 57.2663 -0.386381 54.7337 1.15914 53.1716L24.0849 30L1.15914 6.82843C-0.386384 5.26633 -0.386384 2.73367 1.15914 1.17157C2.70466 -0.390526 5.21046 -0.390526 6.75598 1.17157L29.6817 24.3431C32.7728 27.4673 32.7728 32.5327 29.6817 35.6569L6.75598 58.8284C5.21046 60.3905 2.70467 60.3905 1.15914 58.8284Z"
            fill="#6F767E"
          />
        </svg>
      </div>
    </div>
  );
}

export default Expand;
