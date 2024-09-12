import React from "react";
import "./MyChatBot.css";
import QuickGuide from "../wigets/QuickGuide";
import PdfViewer from "../wigets/PdfViewer";
import RenewableGraph from "../wigets/RenewableGraph";
import NonRenewableGraph from "../wigets/NonRenewableGraph";
import ProductIntro from "../wigets/ProductIntro";
import DefalutOptions from "../../../config/mainOption/DefalutOptions";
import ChatbotHeader from "../ChatbotHeader";

const CustomMessage = (props) => {
  const { messageType, message } = props;
  const pdf_icon = process.env.PUBLIC_URL + "/assets/pdf_icon26.png";
  const botAvatar = process.env.PUBLIC_URL + "/assets/avatar.png";
  const samplePdf = process.env.PUBLIC_URL + "/assets/test.pdf";

  console.log(message);

  let content;
  switch (messageType) {
    case "quickGuide":
      return "";
    // <div className="flex items-center">
    //   <div class="flex">
    //     <img src={botAvatar} alt="Bot Avatar" className="chatbot-avatar" />
    //     <div>
    //       <ChatbotHeader />
    //       <div class="ml-2 h-[360px] w-[400px] bg-white p-3">
    //         <div class="mb-1 flex text-base font-semibold leading-[24px] text-Text-Normal">
    //           퀵 가이드
    //         </div>
    //         <div class="mb-3 flex text-sm font-normal leading-5 text-Text-Alternative">
    //           보험 상품에 대한 FAQ입니다.
    //         </div>
    //         <QuickGuide />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    case "ReApplicationInsurancePolicy":
      return (
        <div>
          <div class="mb-[30px] mt-[-320px] w-full">
            <div class="react-chatbot-kit-user-chat-message">
              보험증권을 다시 받고 싶은데 어떻게 신청하면 되나요?
            </div>
          </div>
          <div className="mb-10 flex items-center">
            <div class="flex">
              <img
                src={botAvatar}
                alt="Bot Avatar"
                className="chatbot-avatar"
              />
              <div>
                <ChatbotHeader />
                <div className="react-chatbot-kit-chat-bot-message">
                  <div> 보험증권 재발행 방법은 아래 방법을 참고해주세요.</div>
                  <div class="h-5 w-full"></div>
                  <div> 1. 콜센터(☎ 1588-4770)</div>
                  <div>. 고객센터</div>
                  <div class="pl-5"> - 계약자 내방시 : 주민등록증 지참</div>
                  <div class="pl-5">
                    - 대리인 내방시 : 계약자 인감증명서, 인감도장, 대리인 신분증
                    지참
                  </div>
                  <div>
                    3. 모바일 고객센터 : 모바일 앱 로그인 후, [고객센터
                    →증권재발행]{" "}
                  </div>
                  <div class="pl-5">
                    - 증권 재발행은 계약별 연 3회까지 신청 가능하며, 등록된
                    이메일로 발송되요.
                  </div>
                  <div class="h-5 w-full"></div>
                  <div> ※주의사항</div>
                  <div></div>
                  <div>
                    {" "}
                    - 증권재발행 우편수령 시 일반우편으로 발송함에 따라 수령하는
                    시점이 다소 지연되거나 분실의 우려가 있을 수 있어요.
                  </div>

                  <div>
                    - 모바일 고객센터 증권재발행은 계약별 연3회까지 신청
                    가능하며,
                  </div>
                  <div> 등록된 이메일로 발송되요.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "InsurancePreparations":
      return (
        <div>
          <div class="mb-[30px] mt-[-40px] w-full">
            <div class="react-chatbot-kit-user-chat-message">
              보험가입 시 준비해야 할 것이 무엇인가요?
            </div>
          </div>
          <div className="mb-10 flex items-center">
            <div class="flex">
              <img
                src={botAvatar}
                alt="Bot Avatar"
                className="chatbot-avatar"
              />
              <div>
                <ChatbotHeader />
                <div className="react-chatbot-kit-chat-bot-message">
                  <div> 보험가입을 위해서 필요해요.</div>
                  <div>
                    1. 본인소유 휴대폰 : 청약(가입) 1단계에서 본인인증이
                    필요해요.
                  </div>
                  <div>
                    {" "}
                    2. 주민등록증(혹은 운전면허증(외국인일 경우 외국인등록증)
                  </div>
                  <div> 3. 본인 소유의 결제 계좌 혹은 카드정보</div>
                  <div class="pl-5">
                    {" "}
                    - 해당 계좌는 1회 보험료 결제 및 향후 보험료 자동이체를 위한
                  </div>
                  <div class="pl-5">
                    {" "}
                    것으로 가입 전에 계좌잔고를 확인해 주세요.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

      case "InsureAnotherPerson":
        return (
          <div>
            <div class="mb-[30px] mt-[-40px] w-full">
              <div class="react-chatbot-kit-user-chat-message">
                제가 아닌 다른 사람을 피보험자로 할 수 없나요?
              </div>
            </div>
            <div className="mb-10 flex items-center">
              <div class="flex">
                <img
                  src={botAvatar}
                  alt="Bot Avatar"
                  className="chatbot-avatar"
                />
                <div>
                  <ChatbotHeader />
                  <div className="react-chatbot-kit-chat-bot-message">
                    <div>디지털 채널을 이용한 보험 가입은 보험계약자와 피보험자가 동일한 경우만 가입이 가능해요.</div>
                    <div>
                     보험계약자의 경우 계약성립(완료) 이후 피보험자이 동의 등을 얻어 변경이 가능하나, 피보험자의 변경은 불가해요.
                    </div>
                    <div>
                      {" "}
                      ※ 보험계약자 변경 신청은 콜센터(☎ 1588-4770)로 해주세요.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

        case "InsurancePolicy":
          return (
            <div>
              <div class="mb-[30px] mt-[-40px] w-full">
                <div class="react-chatbot-kit-user-chat-message">
                  보험가입 후 보험증권은 언제 받아볼 수 있나요?
                </div>
              </div>
              <div className="mb-10 flex items-center">
                <div class="flex">
                  <img
                    src={botAvatar}
                    alt="Bot Avatar"
                    className="chatbot-avatar"
                  />
                  <div>
                    <ChatbotHeader />
                    <div className="react-chatbot-kit-chat-bot-message">
                      <div>청약(가입)완료 후 보험가입이 승낙된 경우, 등록하신 고객님의 카카오톡 메시지 또는 LMS로 발송되요.</div>
                      <div>
                       가입 이후에는 당사 콜센터 및 모바일 고객창구에서 재발급 신청 가능해요.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );  

          case "InsurancePolicyAfterPurchase":
            return (
              <div>
                <div class="mb-[30px] mt-[-40px] w-full">
                  <div class="react-chatbot-kit-user-chat-message">
                    보험가입 후 언제부터 보장이 되나요?
                  </div>
                </div>
                <div className="mb-10 flex items-center">
                  <div class="flex">
                    <img
                      src={botAvatar}
                      alt="Bot Avatar"
                      className="chatbot-avatar"
                    />
                    <div>
                      <ChatbotHeader />
                      <div className="react-chatbot-kit-chat-bot-message">
                        <div>청약(가입)마지막 단계인 초회 보험료 납입 완료한 시점부터 보장을 받으실 수 있어요.</div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );  
            
            case "SpecifyingBeneficiaries":
              return (
                <div>
                  <div class="mb-[30px] mt-[-40px] w-full">
                    <div class="react-chatbot-kit-user-chat-message">
                      수익자 지정은 어떻게 하나요?
                    </div>
                  </div>
                  <div className="mb-10 flex items-center">
                    <div class="flex">
                      <img
                        src={botAvatar}
                        alt="Bot Avatar"
                        className="chatbot-avatar"
                      />
                      <div>
                        <ChatbotHeader />
                        <div className="react-chatbot-kit-chat-bot-message">
                          <div>디지털 채널을 이용한 보험 가입 시 수익자는 법정상속인으로 지정이 되요.
                          </div>
                          <div>다만, 계약성립(완료) 이후 수익자를 추가하거나 변경할 수 있어요.
                          </div>
                          <div>※ 수익자 변경은 보험금 지급사유가 발생하기 전 까지만 가능하며, 자세한 문의는 콜센터(☎ 1588-4770)로 문의해주세요.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );  
             
              case "AmountInsurance":
                return (
                  <div>
                    <div class="mb-[30px] mt-[-40px] w-full">
                      <div class="react-chatbot-kit-user-chat-message">
                        보험가입금액이 무엇인가요?
                      </div>
                    </div>
                    <div className="mb-10 flex items-center">
                      <div class="flex">
                        <img
                          src={botAvatar}
                          alt="Bot Avatar"
                          className="chatbot-avatar"
                        />
                        <div>
                          <ChatbotHeader />
                          <div className="react-chatbot-kit-chat-bot-message">
                            <div>생명보험의 보험가입금액은 법률 및 보험약관에서 정한 보험사고가 발생한 경우에 지급되는 보험회사와 보험계약자간의 합의된 약정 금액을 말해요.
                            </div>
                            <div>예를 들면 사망에 대한 보장금액이 1억원일 경우 "1억원"이 보험가입금액이 되요.
                            </div>
                            <div>또한, 종신보험의 주계약이나, 정기보험의 주계약의 경우 가입금액과 보장금액이 동일하나, 암보험 등은 보장금액과 가입금액이 다를 수 있어요.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );  
                
                case "Uninsured":
                return (
                  <div>
                    <div class="mb-[30px] mt-[-40px] w-full">
                      <div class="react-chatbot-kit-user-chat-message">
                        보험가입이 되지 않을 경우도 있나요?
                      </div>
                    </div>
                    <div className="mb-10 flex items-center">
                      <div class="flex">
                        <img
                          src={botAvatar}
                          alt="Bot Avatar"
                          className="chatbot-avatar"
                        />
                        <div>
                          <ChatbotHeader />
                          <div className="react-chatbot-kit-chat-bot-message">
                            <div>보험회사는 피보험자에 대한 계약 심사를 진행하여 인수가 불가할 경우에는 승낙을 거절 할 수 있어요.
                            </div>
                            <div>회사는 계약의 청약(가입)신청을 받고, 제1회 보험료를 받은 경우에 건강진단을 받지 않는 계약은 청약(가입)일, 진단계약은 진단일(재진단의 경우에는 최종 진단일)부터 30일 이내에 승낙 또는 거절하여야 합니다.
                            </div>
                            <div>승낙을 거절한 경우에는 보험료를 반환해드리고, 보험계약자에게 거절 사실과 거절 사유를 안내해드립니다.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );  
                     
                case "WhenPurchaseInsurance":
                return (
                  <div>
                    <div class="mb-[30px] mt-[-40px] w-full">
                      <div class="react-chatbot-kit-user-chat-message">
                        보험 가입은 언제든 가능 한건가요?
                      </div>
                    </div>
                    <div className="mb-10 flex items-center">
                      <div class="flex">
                        <img
                          src={botAvatar}
                          alt="Bot Avatar"
                          className="chatbot-avatar"
                        />
                        <div>
                          <ChatbotHeader />
                          <div className="react-chatbot-kit-chat-bot-message">
                            <div>당사 디지털 채널에서의 보험 가입은 오전7시 ~ 오후 11시까지 가능해요.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );  
                
                case "LimitInsurance":
                return (
                  <div>
                    <div class="mb-[30px] mt-[-40px] w-full">
                      <div class="react-chatbot-kit-user-chat-message">
                        보험가입 시 한도초과로 나오는 것은 왜그렇죠?
                      </div>
                    </div>
                    <div className="mb-10 flex items-center">
                      <div class="flex">
                        <img
                          src={botAvatar}
                          alt="Bot Avatar"
                          className="chatbot-avatar"
                        />
                        <div>
                          <ChatbotHeader />
                          <div className="react-chatbot-kit-chat-bot-message">
                            <div>회사별로 피보험자의 연령, 직업 운전 등의 위험에 따라 보장 급부별 가입할 수 있는 한도의 제한이 있으며, 한도가 초과된다면 가입할 수 없으며, 상세한 내용은 ________________로 문의해 주시기 바래요.
                            </div> <br/>
                            <div>※ 연금저축은 다른 금융기관에 가입하신 연금저축계좌 「퇴직연금계좌(DC, IRP)의 자기부담금 포함)」의 연간 납입보험료가 1,800만원이 초과할 경우 가입이 제한되요.
                            </div><br/>
                            <div>※ 각 회사에 가입하신 내역은 「한국 신용정보원(http://www.credit4u.or.kr)」에서 본인이 직접 조회가 가능해요.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );  

    case "productIntro":
      return (
        <div className="flex items-center">
          <div class="flex">
            <img src={botAvatar} alt="Bot Avatar" className="chatbot-avatar" />
            <div>
              <ChatbotHeader />
              <ProductIntro />
            </div>
          </div>
        </div>
      );
    case "simulation":
      return <div>시뮬레이션@@</div>;
    case "cancellationRefund":
      return (
        <div>
          <div className="mt-[20px] flex items-center">
            <div class="flex">
              <img
                src={botAvatar}
                alt="Bot Avatar"
                className="chatbot-avatar"
              />
              <div>
                <ChatbotHeader />
                <div class="mb-2 ml-2 max-h-[150px] w-[420px] rounded-[0_12px_12px_12px] bg-white p-3">
                  <div class="mb-1 flex text-base font-semibold leading-6 text-Text-Normal">
                    iM 암보험 무배당 2404
                  </div>
                  <div class="mb-3 flex text-sm font-normal leading-5 text-Text-Alternative">
                    iM 암보험 무배당 2404 가입시 알아두실 사항에 대해
                    소개하겠습니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RenewableGraph />
          <NonRenewableGraph />
        </div>
      );
    case "pdfViewer":
      return (
        <div className="mb-[42px] flex items-center">
          <div class="flex">
            <img src={botAvatar} alt="Bot Avatar" className="chatbot-avatar" />
            <div>
              <ChatbotHeader />
              <div class="ml-2 h-[160px] w-[460px] rounded-[0_12px_12px_12px] bg-white p-3">
                <div class="mb-1 flex text-base font-semibold leading-6 text-Text-Normal">
                  iM 암보험 무배당 2404
                </div>
                <div class="mb-3 flex text-sm font-normal leading-5 text-Text-Alternative">
                  iM 암보험 무배당 2404 가입시 알아두실 사항에 대해
                  소개하겠습니다.
                </div>
                <div class="flex h-[66px] w-[434px] items-center rounded-lg bg-Fill-Gray-Assistive p-3">
                  <div>
                    <img src={pdf_icon} />
                  </div>
                  <div class="ml-4">
                    <div class=" mb-1 text-sm font-semibold leading-5 text-Text-Normal">
                      240328 가입시알아두실사항_DT.pdf
                    </div>
                    <div class="flex items-center">
                      <PdfViewer fileUrl={samplePdf} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      break;
    default:
      content = <div>{message}</div>; // Display the message prop
      break;
  }

  // 빈 메시지 박스를 렌더링하지 않음
  if (props.message === "") {
    return null;
  }

  return (
    <div className="flex items-center">
      <div>
        <ChatbotHeader />
        <div className="react-chatbot-kit-chat-bot-message">{content}</div>
      </div>
    </div>
  );
};

export default CustomMessage;