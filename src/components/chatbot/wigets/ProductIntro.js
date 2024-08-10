import React from "react";

const ProductIntro = () => {
  return (
    <div
      className="quick-guide-container2"
      class="ml-2 h-[208px] w-[400px] rounded-[0_12px_12px_12px] bg-white p-3"
    >
      <div className="mb-1 flex text-base font-semibold leading-6 text-Text-Normal">
        인터넷 보험 상품 목록
      </div>
      <div class="mb-1 flex text-sm font-normal leading-5 text-Text-Alternative">
        iM 라이프에서 제공하는 인터넷 보험 상품은 4가지 있습니다.
      </div>
      <div class="flex cursor-pointer items-center  justify-between py-2 ">
        <div class="flex pl-2">
          <div class="mr-2 flex h-[18px] w-[18px] items-center justify-center rounded-[9px] bg-Primary-Normal  text-xs">
            1
          </div>
          iM 암보험 무배당 2024
        </div>
      </div>
      <hr class=" text-Line-Gray-Assistive" />
      <div class="flex cursor-pointer items-center justify-between py-2 ">
        <div class="flex pl-2">
          <div class="mr-2 flex h-[18px] w-[18px] items-center justify-center rounded-[9px] bg-Primary-Normal text-xs">
            2
          </div>
          iM 간편정기보험 무배당 2024
        </div>
      </div>
      <hr class=" text-Line-Gray-Assistive" />
      <div class="flex cursor-pointer items-center justify-between py-2 ">
        <div class="flex pl-2">
          <div class="mr-2 flex h-[18px] w-[18px] items-center justify-center rounded-[9px] bg-Primary-Normal text-xs">
            3
          </div>
          iM 저축보험 무배당 2024
        </div>
      </div>
      <hr class="text-Line-Gray-Assistive" />
      <div class="flex cursor-pointer items-center justify-between py-2 ">
        <div class="flex pl-2">
          <div class="mr-2 flex h-[18px] w-[18px] items-center justify-center rounded-[9px] bg-Primary-Normal text-xs">
            4
          </div>
          iM 교통상해보험 무배당 2024
        </div>
      </div>
    </div>
  );
};
export default ProductIntro;
