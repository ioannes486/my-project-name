import { FC } from "react";
import "./App.css";

interface Service {
  title: string;
  description: string;
}

interface EligibilityScenario {
  scenario: string;
}

interface ProcessStep {
  step: string;
  title: string;
  detail: string;
}

const services: Service[] = [
  {
    title: "일상생활 지원",
    description:
      "식사 준비, 위생 관리, 복약 확인 등 생활을 안정적으로 돕습니다.",
  },
  {
    title: "신체활동 보조",
    description:
      "이동, 보행 등 어르신의 컨디션에 맞춘 안전한 활동을 지원합니다.",
  },
  {
    title: "정서 지원",
    description:
      "말벗, 정서 교감, 생활 리듬 관리로 어르신의 하루가 외롭지 않도록 함께합니다.",
  },
  {
    title: "가족 돌봄 부담 완화",
    description:
      "가족이 혼자 감당하지 않도록 상담부터 서비스 운영까지 체계적으로 동행합니다.",
  },
];

const eligibilityScenarios: string[] = [
  "혼자 계시는 시간이 길어 식사와 안전이 걱정되는 경우",
  "퇴원 후 일상 복귀 과정에서 집에서의 돌봄이 필요한 경우",
  "가족이 직장과 돌봄을 병행해 지속적인 지원이 어려운 경우",
  "장기요양 등급 신청을 고민 중이지만 무엇부터 해야 할지 막막한 경우",
];

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "상담 접수",
    detail: "전화 또는 카카오톡으로 현재 상황을 간단히 안내해 주세요.",
  },
  {
    step: "02",
    title: "장기요양 안내",
    detail: "등급 신청 절차와 필요 서류를 이해하기 쉽게 설명해 드립니다.",
  },
  {
    step: "03",
    title: "가정 상황 확인",
    detail: "어르신의 생활 패턴과 가족의 요청 사항을 함께 정리합니다.",
  },
  {
    step: "04",
    title: "서비스 계획 수립",
    detail: "방문 일정, 돌봄 범위, 소통 방식을 구체적으로 맞춤 설계합니다.",
  },
  {
    step: "05",
    title: "서비스 시작",
    detail: "돌봄 시작 후에도 정기 점검으로 서비스 품질을 지속 관리합니다.",
  },
];

const App: FC = () => {
  return (
    <div className="site-shell">
      <header className="top-nav" aria-label="메인 내비게이션">
        <p className="brand">스타방문요양센터</p>
        <nav>
          <a href="#hero">센터 소개</a>
          <a href="#services">서비스</a>
          <a href="#process">이용 절차</a>
          <a href="#contact">상담 문의</a>
          <a href="#location">오시는 길</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="page-section hero-section">
          <div className="hero-content">
            <p className="eyebrow">방문요양 · 가족상담 · 장기요양 안내</p>
            <h1>가족의 마음을 덜어주는 든든한 방문요양 파트너</h1>
            <p className="lead">
              스타방문요양센터는 어르신의 하루를 가까이 돌보며, 가족이 안심할 수
              있는 돌봄 체계를 함께 만들어 갑니다.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:031-000-0000">
                지금 전화 상담 031-000-0000
              </a>
              <a className="btn btn-secondary" href="#contact">
                상담 신청 바로가기
              </a>
            </div>
            <ul className="hero-meta" aria-label="핵심 안내 정보">
              <li>상담 가능: 평일 09:00-18:00</li>
              <li>방문요양 운영: 월-토 08:00-20:00</li>
              <li>서비스 지역: 수원시, 용인시, 화성시 일부</li>
            </ul>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="pulse-card">신뢰 기반 돌봄</div>
            <div className="pulse-card">상황 맞춤 케어플랜</div>
            <div className="pulse-card">가족과의 정기 소통</div>
          </div>
        </section>

        <section id="services" className="page-section">
          <div className="section-intro">
            <p className="eyebrow">서비스 소개</p>
            <h2>어르신의 일상과 가족의 삶을 함께 지키는 방문요양 서비스</h2>
          </div>
          <div className="grid two-by-two">
            {services.map((service) => (
              <article key={service.title} className="info-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="eligibility" className="page-section">
          <div className="section-intro">
            <p className="eyebrow">이용 대상</p>
            <h2>우리 가족 상황에도 도움이 될지 빠르게 확인해 보세요</h2>
            <p className="support-copy">
              아래 사례에 해당된다면 상담을 통해 서비스 가능 여부를 구체적으로
              안내해 드립니다.
            </p>
          </div>
          <ul className="scenario-list">
            {eligibilityScenarios.map((scenario) => (
              <li key={scenario}>{scenario}</li>
            ))}
          </ul>
        </section>

        <section id="process" className="page-section">
          <div className="section-intro">
            <p className="eyebrow">이용 절차</p>
            <h2>복잡하지 않게, 상담부터 서비스 시작까지 단계별로 함께합니다</h2>
          </div>
          <ol className="process-list">
            {processSteps.map((item) => (
              <li key={item.step}>
                <span className="step-index">{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="trust" className="page-section">
          <div className="section-intro">
            <p className="eyebrow">신뢰 요소</p>
            <h2>
              보여주기식이 아닌, 실제 운영 중심의 요양 서비스를 지향합니다
            </h2>
          </div>
          <div className="grid trust-grid">
            <article className="info-card">
              <h3>돌봄 철학</h3>
              <p>
                어르신의 존엄과 자율성을 우선으로, 무리 없는 일상 유지에
                집중합니다.
              </p>
            </article>
            <article className="info-card">
              <h3>서비스 관리</h3>
              <p>
                초기 계획 수립 후 정기 점검을 통해 돌봄 계획을 지속적으로
                보완합니다.
              </p>
            </article>
            <article className="info-card">
              <h3>운영 원칙</h3>
              <p>
                가족에게 진행 상황을 투명하게 공유하고, 요청사항을 즉시
                반영합니다.
              </p>
            </article>
            <article className="info-card">
              <h3>케어 기준</h3>
              <p>
                상태 변화 대응, 안전 수칙 준수, 기록 중심 관리로 서비스 품질을
                유지합니다.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="page-section cta-section">
          <div className="section-intro">
            <p className="eyebrow">상담 문의</p>
            <h2>지금 가장 편한 방법으로 상담을 시작해 보세요</h2>
            <p className="support-copy">
              상담 시간 내 연락 주시면 현재 상황에 맞춰 빠르게 안내해 드립니다.
            </p>
          </div>
          <div className="cta-grid">
            <a className="cta-tile" href="tel:031-000-0000">
              <h3>전화 상담</h3>
              <p>031-000-0000</p>
              <span>클릭 시 바로 통화 연결</span>
            </a>
            <a
              className="cta-tile"
              href="https://open.kakao.com/o/example"
              target="_blank"
              rel="noreferrer"
            >
              <h3>카카오톡 상담</h3>
              <p>@스타방문요양센터</p>
              <span>카카오톡 채팅으로 간편 문의</span>
            </a>
            <a className="cta-tile" href="#contact-form">
              <h3>문의 폼 이동</h3>
              <p>온라인 상담 신청</p>
              <span>필요 정보 입력 후 상담 요청</span>
            </a>
          </div>

          <form
            id="contact-form"
            className="inquiry-form"
            aria-label="온라인 문의 폼"
          >
            <label>
              보호자 성함
              <input type="text" name="guardian" placeholder="예: 홍길동" />
            </label>
            <label>
              연락처
              <input type="tel" name="phone" placeholder="예: 010-0000-0000" />
            </label>
            <label>
              상담 내용
              <textarea
                name="message"
                rows={3}
                placeholder="어르신 상황과 상담 희망 내용을 간단히 남겨주세요"
              ></textarea>
            </label>
            <button type="button" className="btn btn-primary">
              상담 요청 보내기
            </button>
          </form>
          <p className="hours">
            상담 시간: 평일 09:00-18:00 | 운영 시간: 월-토 08:00-20:00
          </p>
        </section>

        <section id="location" className="page-section">
          <div className="section-intro">
            <p className="eyebrow">오시는 길</p>
            <h2>
              가까운 지역에서 신속하게 찾아가는 방문요양 서비스를 제공합니다
            </h2>
          </div>
          <div className="location-grid">
            <article className="info-card">
              <h3>센터 주소</h3>
              <p>경기도 수원시 영통구 예시로 123, 스타빌딩 4층</p>
            </article>
            <article className="info-card">
              <h3>서비스 지역</h3>
              <p>
                수원시 전역, 용인시 기흥구, 화성시 동탄권 중심으로 방문 운영
              </p>
            </article>
            <article className="info-card">
              <h3>방문 안내</h3>
              <p>
                사전 예약 후 방문 상담 가능하며, 최초 상담은 전화로 먼저
                진행됩니다.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>상호명: 스타방문요양센터</p>
        <p>대표번호: 031-000-0000</p>
        <p>주소: 경기도 수원시 영통구 예시로 123, 스타빌딩 4층</p>
        <p>서비스 지역: 수원시, 용인시, 화성시 일부</p>
        <p>운영 시간: 월-토 08:00-20:00</p>
        <p>상담 시간: 평일 09:00-18:00</p>
      </footer>
    </div>
  );
};

export default App;
