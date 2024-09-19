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

                            <div>※ 각 회사에 가입하신 내역은 「한국 신용정보원」 <a href="http://www.credit4u.or.kr"> http://www.credit4u.or.kr </a>에서 본인이 직접 조회가 가능해요.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );  
                case "SideInsuranceBeneficiaryConsent":
                  return (
                    <div>
                      <div class="mb-[30px] mt-[-320px] w-full">
                        <div class="react-chatbot-kit-user-chat-message">
                          보험수익자 지정,변경 약정 동의가 무엇인가요?
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
                              <div>보험수익자 지정, 변경 약정 동의란,
                              </div> 
                              <div>만약의 경우 보험계약자 사망 이후에 신규 계약자를 포함한 상속인들이 보험수익자를 지정 또는 변경할 수 있는 권리를 가질 수 있도록 약정에 동의하는 제도를 말해요.
                              </div>
                              <div>만약, 별도의 약정 동의 없이 보험계약자가 사망한 때에는 신규 계약자를 포함한 상속인들이 보험수익자 변경 신청을 하실 수 없어요.
                              </div>
                              <div>단, 해당 계약의 상속인 및 피보험자와 현재 보험수익자가 동의한 경우에는 보험수익자 변경이 가능하구요.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );

                  case "LegalBeneficiary":
                    return (
                      <div>
                        <div class="mb-[30px] mt-[-320px] w-full">
                          <div class="react-chatbot-kit-user-chat-message">
                            수익자를 법정상속인으로 지정할 경우 상속 순위는 어떻게 되나요?
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
                              <div>법정상속인은 민법의 재산상속에 대한 규정에 따라서 피보험자의 상속인 중에서 확정되며, 상속 순위상 선순위 상속인이 존재하면 후순위의 상속인은 상속권이 없어요.
                              </div><br/>
                                <div>【 상속순위 】<br/>
                                      ▷ 1순위 : 피상속인의 직계비속(자녀) 및 배우자<br/>
                                      ▷ 2순위 : 피상속인의 지계존속(부모) 및 배우자<br/>
                                      ▷ 3순위 : 피상속인의 형제자매<br/>
                                      ▷ 4순위 : 피상속인의 4촌이내의 방계혈족
                                </div> <br/>
                                <div>※ 배우자는 직계비속이 있는 경우에는 직계비속과 같은 순위로 상속인이 되며, 직계비속이 없는 경우에는 직계존속과 같은 순위로 공동상속인이 됩니다.(지계존속도 없으면 단독상속)
                                </div><br/>
                                <div>※ 배우자의 상속분은 직계비속 또는 직계존속의 상속분의 1.5배 입니다.
                                </div><br/>
                                <div>예) 상속 보험금 1억 / 상속인 : 배우자, 자녀 2명<br/>
                                      ▷ 배우자 = 1억 x (1.5 / (1.5 + 1.0 + 1.0)) = 42,857,143(원)<br/>
                                      ▷ 자녀1 = 1억 x (1.0 / (1.5 + 1.0 + 1.0)) = 28,571,429(원)<br/>
                                      ▷ 자녀2 = 1억 x (1.0 / (1.5 + 1.0 + 1.0)) = 28,571,429(원)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );                   
                    case "MarketingConsentCancel":
                      return (
                        <div>
                          <div class="mb-[30px] mt-[-320px] w-full">
                            <div class="react-chatbot-kit-user-chat-message">
                            마케팅 동의에 대한 철회는 어떻게 하나요?
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
                                  <div>보콜센터 또는 인터넷 고객창구를 통해서 신청이 가능해요. 
                                  </div> 
                                  <div>1. 콜센터(☎1588-4770) * 계약자 본인만 가능
                                  </div>
                                  <div>2. 인터넷 고객창구 →고객정보관리
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );                         
                       
                      case "AfterSideContractDetails":
                      return (
                        <div>
                          <div class="mb-[30px] mt-[-320px] w-full">
                            <div class="react-chatbot-kit-user-chat-message">
                           보험가입 후 보험의 계약사항은 어디서 확인 할 수 있나요?
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
                                  <div>계약사항 조회는 [인터넷고객창구 → 계약조회변경 → 나의종합정보]에서 증권번호 별 상세보기를 선택하시면 확인이 가능해요.
                                  </div> 
                                
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );

                      
                      case "WhenInsurancePremiumPayment":
                        return (
                          <div>
                            <div class="mb-[30px] mt-[-300px] w-full">
                              <div class="react-chatbot-kit-user-chat-message">
                              보험료가 통잔잔고 부족으로 미인출되었습니다. 언제 다시 청구되나요?
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
                                    <div>대구은행, 농협, 국민은행, 신한은행, 우리은행은 5일 단위로 미납한 달의 다음달 말일까지 재청구 되요. 그외 금융기관은 10일 단위로 다음달 말일까지 재청구 되구요.
                                    </div> 
                                    <div>* 청구일자 :  5일자, 10일자, 15일자, 20일자, 25일자, 말일자
                                    </div>                            
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      case "ChangeAutomaticTransfer":
                        return (
                          <div>
                            <div class="mb-[30px] mt-[-300px] w-full">
                              <div class="react-chatbot-kit-user-chat-message">
                              자동이체 신청/변경/해지는 어떻게하나요?
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
                                    <div>자동이체 변경은 아래 방법으로 가능해요.
                                    </div> 
                                    <div>① 콜센터(1588-4770).
                                    </div> 
                                    <div>② 인터넷 고객센터 및 모바일 고객센터
                                    </div> 
                                    <div> ③ 고객센터 방문(서울/부산/대구)
                                    </div> 
                                    <div> ※ 예금주가 상이할 경우 변경 가능한 가족관계 범위 및 필요 서류 확인을 콜센터로 문의해주세요.
                                    </div> 
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                        case "TerminationAutomaticTransfer":
                        return (
                          <div>
                            <div class="mb-[30px] mt-[-300px] w-full">
                              <div class="react-chatbot-kit-user-chat-message">
                              자동 이체를 해지하면 어떻게 보험료를 납입하나요?
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
                                    <div>보험료 납입은 계약자님 계좌에서 즉시 출금 가능해요.
                                    </div> 
                                    <div>① 콜센터(1588-4770).
                                    </div> 
                                    <div>② 인터넷 고객센터 및 모바일 고객센터
                                    </div> 
                                    <div> ③ 고객센터 방문(서울/부산/대구)
                                    </div> 
                                    <div> ※ 가상계좌입금은 콜센터를 문의해주세요.
                                    </div> 
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                        
                        case "ReserveCancellationRefund":
                        return (
                          <div>
                            <div class="mb-[30px] mt-[-300px] w-full">
                              <div class="react-chatbot-kit-user-chat-message">
                              적립금와 해약환급금의 차이는 무엇인가요?
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
                                    <div>적립금이란 고객님께서 납입하신 보험료 중 사업비와 보장을 위한 위험보험료를 제외한 저축보험료가 투자수익률(적립이율)에 의해 적립된 부분이며, 해약환급금은 적립금에서 미공제 된 신계약비를 차감하고 지급되는 금액이에요.
                                    </div> 
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );  
                        case "DocumentsInsuranceClaim":
                          return (
                            <div>
                              <div class="mb-[30px] mt-[-300px] w-full">
                                <div class="react-chatbot-kit-user-chat-message">
                                보험금 청구를 위한 신청서류는 어디서 확인할 수 있나요?
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
                                      <div>제지급/신청서류양식은 아래 경로에서 확인 가능해요.
                                      </div> 
                                      <div>1. 인터넷고객창구  → 증명서발급 → 제지급/신청서류양식</div>
                                      <div>1. 당사홈페이지  → 고객센터 → 사고보험금청구안내  → 사고보험청구 서류안내 </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );       
                          case "MailAcceptance":
                            return (
                              <div>
                                <div class="mb-[30px] mt-[-300px] w-full">
                                  <div class="react-chatbot-kit-user-chat-message">
                                  제지급 우편 접수는 어떻게 하나요?
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
                                        <div>신청서류에 인감도장날인하거나 서명날인하여 우편 접수 할 수 있어요.
                                        </div> <br/>
                                        <div>① 신청서류 (당사양식)<br/>
                                            - 양식 교부 방법 <br/>
                                            콜센터(1588-4770)을 통해 우편, 팩스, 이메일로 교부 받을 수 있어요<br/>
                                          *[공식 홈페이지-고객센터-제지급금청구안내-제지급금청구서류 다운로드] 가능
                                        </div><br/>
                                        <div>② 인감증명서(본인발급) 또는 본인서명사실확인서 <br/>
                                        - 사용용도 필수 기재 (iM라이프 대출 신청용 (증권번호))   </div><br/>
                                        <div>③ 청구권자 신분증 및 본인 명의 계좌 사본
                                        </div><br/>
                                        <div>※ 청구권자 본인 신청<br/>
                                              ※ 발송 주소지는 당사 양식 청구서에서 확인 가능<br/>
                                              ※ 발급 제출 서류는 발급일로부터 3개월 이내 사용 가능<br/>
                                              ※ 생존보험금(만기보험금, 생존급여금)은 청구권자와 피보험자가 다를 경우 생존사실확인서류(주민등록초본, 등본, 가족관계증명서 中 1개) 추가 제출 필요<br/>  
                                              ※ 미성년자, 해외거주자 청구권자 사업자 계약 등 특정 사항은 콜센터를 통해 상담 후에 안내 가능</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );                 
                             
                            case "ApplicationMaturityInsurance":
                        return (
                          <div>
                            <div class="mb-[30px] mt-[-300px] w-full">
                              <div class="react-chatbot-kit-user-chat-message">
                                만기보험금 신청은 어떻게 하나요?
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
                                    <div>만기보험금은 아래 방법으로 금액 확인 및 신청 할 수 있어요.
                                    </div> <br/>
                                    <div>① 콜센터(1588-4770).
                                    </div> 
                                    <div>② 인터넷 고객센터 및 모바일 고객센터
                                    </div> 
                                    <div>③ 우편접수</div>
                                    <div> ④ 고객센터 방문(서울/부산/대구)
                                    </div>  <br/>
                                    <div> ※ 비대면 접수(①~③)는 금액 한도, 필수인증수단, 필수서류 등 필요할 수 있음    <br/>
                                          ※ 모바일 및 인터넷 고객센터 이용시간안내 (365일 08:00 ~ 23:00) <br/>
                                          ※ 대리인 청구, 미성년자, 해외거주자 청구권자 사업자 계약 등 특정 사항은 콜센터를 통해 상담 후에 안내 가능
                                    </div> 
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                        
                        case "WhereCancellationRefund":
                          return (
                            <div>
                              <div class="mb-[30px] mt-[-300px] w-full">
                                <div class="react-chatbot-kit-user-chat-message">
                               (해약)해지환급금은 어디서 확인할 수 있나요?
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
                                      <div>해지환급금은 [인터넷고객창구 → 계약조회변경 → 나의종합정보 → 증권번호 별 상세보기를 선택 → 해지환급금]으로 확인할 수 있어요.</div>
                                    
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );       
                          
                          case "HowCancellation":
                            return (
                              <div>
                                <div class="mb-[30px] mt-[-300px] w-full">
                                  <div class="react-chatbot-kit-user-chat-message">
                                    해약은 어떻게 하나요?
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
                                        <div>해약은 아래 방법으로 금액 확인 및 신청 할 수 있어요.
                                        </div> <br/>
                                        <div>① 콜센터(1588-4770).
                                        </div> 
                                        <div>② 인터넷 고객센터 및 모바일 고객센터
                                        </div> 
                                        <div>③ 우편접수</div>
                                        <div> ④ 고객센터 방문(서울/부산/대구)
                                        </div>  <br/>
                                        <div> ※ 비대면 접수(①~③)는 금액 한도, 필수인증수단, 필수서류 등 필요할 수 있음    <br/>
                                              ※ 유지 중인 일부 계약은 모바일 및 인터넷고객센터로 접수 불가<br/>
                                              ※ 모바일 및 인터넷 고객센터 이용시간안내 (365일 08:00 ~ 23:00)<br/>
                                              ※ 대리인 청구, 미성년자, 해외거주자 청구권자 사업자 계약 등 특정 사항은 콜센터를 통해 상담 후에 안내 가능
                                        </div> 
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                            
                            case "HowIntermediateWithdrawal":
                            return (
                              <div>
                                <div class="mb-[30px] mt-[-300px] w-full">
                                  <div class="react-chatbot-kit-user-chat-message">
                                    중도인출금 신청은 어떻게 하나요?
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
                                        <div>중도인출금은 아래 방법으로 금액 확인 및 신청 할 수 있어요.
                                        </div> <br/>
                                        <div>① 콜센터(1588-4770).
                                        </div> 
                                        <div>② 인터넷 고객센터 및 모바일 고객센터
                                        </div> 
                                        <div>③ 우편접수</div>
                                        <div> ④ 고객센터 방문(서울/부산/대구)
                                        </div>  <br/>
                                        <div> ※ 비대면 접수(①~③)는 금액 한도, 필수인증수단, 필수서류 등 필요할 수 있음    <br/>
                                              ※ 모바일 및 인터넷 고객센터 이용시간안내 (365일 08:00 ~ 23:00)<br/>
                                              ※ 대리인 청구, 미성년자, 해외거주자 청구권자 사업자 계약 등 특정 사항은 콜센터를 통해 상담 후에 안내 가능
                                        </div> 
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                            
                            case "PossibleWithdrawalSubscription":
                              return (
                                <div>
                                  <div class="mb-[30px] mt-[-300px] w-full">
                                    <div class="react-chatbot-kit-user-chat-message">
                                      청약철회 가능기간 및 신청절차를 알려주세요.
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
                                          <div>아래 경우를 제외하고 보험증권을 받은날부터 15일 이내에 할 수 있으며, 인터넷 고객창구나 모바일 고객센터에서 청약철회 가능해요.
                                          </div> <br/>
                                          <div>1. 유(有)진단계약
                                          </div> 
                                          <div>2. 전문보험계약자가 체결한 계약
                                          </div> 
                                          <div>3. 보험기간이 1년 미만인 계약</div>
                                          <div> 4. 청약을 한 날로부터 30일(65세 이상을 계약자로 하는 통신판매 보험계약의 경우에는 45일)을 초과한 경우  
                                          </div>                                       
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                              
                              case "ImPossibleWithdrawalSubscription":
                                return (
                                  <div>
                                    <div class="mb-[30px] mt-[-300px] w-full">
                                      <div class="react-chatbot-kit-user-chat-message">
                                        청약철회가 불가능한 경우는 무엇인가요?
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
                                            <div>다음의 경우 청약철회가 불가능해요
                                            </div> <br/>
                                            <div>1. 유진단계약
                                            </div> 
                                            <div>2. 전문보험계약자가 체결한 계약
                                            </div> 
                                            <div>3. 보험기간이 1년 미만인 계약</div>
                                            <div> 4. 청약을 한 날로부터 30일(65세 이상을 계약자로 하는 통신판매 보험계약의 경우에는 45일)을 초과한 경우  
                                            </div> <br/>      
                                            <div> ※ 위의 4가지 경우에 해당 시에는 해약으로 신청하셔야 합니다.<br/>   
                                            ※ 해약 신청은 콜센터(☎ 1588-4770)로 전화 주시기 바랍니다.
                                            </div>                                  
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                                
                          case "WherePersonalInformation":
                          return (
                            <div>
                              <div class="mb-[30px] mt-[-300px] w-full">
                                <div class="react-chatbot-kit-user-chat-message">
                              개인정보 변경은 어디서 할 수 있나요?
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
                                      <div>개인정보 변경은 [인터넷고객창구 → 고객정보관리 → 고객정보변경]에서 하실 수 있어요.</div>
                                    
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );       
                          
                          case "WhereCertificate":
                            return (
                              <div>
                                <div class="mb-[30px] mt-[-300px] w-full">
                                  <div class="react-chatbot-kit-user-chat-message">
                                   각종 증명서 발급은 어디서 할 수 있나요?
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
                                        <div>증명서발급은 아래의 방법으로 가능해요.
                                        </div> 
                                        <div>  ① 콜센터(1588-4770)<br/>
                                                ② 인터넷 고객센터 및 모바일 고객센터<br/>
                                                ③ 고객센터 방문(서울/부산/대구)
                                        </div> <br/>
                                        <div>
                                                ○ 발급 가능 증명서<br/>
                                                1. 보험료납입증명서(소득)<br/>
                                                2. 보험료납입증명서(일반)<br/>
                                                3. 보험료잔액증명서<br/>
                                                4. 보험계약대출확인서<br/>
                                                5. 해지환급금확인서<br/>
                                                6. 이자소득원천징수명세서 *모바일 고객센터는 불가
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