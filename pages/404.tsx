import Image from "next/image";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();
  //               <Image src="/images/404.svg" width={275} height={275} alt="error 404" />

  return (
    <div className="px-4 mx-auto max-w-7xl">
      <div className="max-w-md py-32 mx-auto text-center">
        <div className="mb-4 text-center">
          <Image
            className="mx-auto"
            src="/images/404.svg"
            width={275}
            height={275}
            alt="error 404"
          />
        </div>
        <div className="mb-7">
          <h3 className="mb-3 text-2xl">عذراً … حدث خطأ ما</h3>
          <p>
            هذه الصفحة غير موجودة، سوف نقوم بحل هذه المسألة قريباً
            <br />
            إذا كان لديك أي استفسار تواصل معنا
          </p>
        </div>
        <button
          onClick={() => router.push("/")}
          className="block px-16 py-3 mx-auto text-center text-white rounded-sm bg-theme-primary "
        >
          الرجوع إلى الرئيسية
        </button>
      </div>
    </div>
  );
};

export default Custom404;
