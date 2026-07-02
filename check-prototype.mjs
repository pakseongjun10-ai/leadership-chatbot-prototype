import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const html = readFileSync("index.html", "utf8");

[
  "이 프로토타입에서 확인할 것",
  "AI가 답변에 쓴 정보",
  "아직 부족한 정보",
  "왜 이 사례가 추천됐나요?",
  "주의할 차이점",
  "실행계획에 표시",
  "제가 지금 확인하려는 것",
  "지금은 이렇게 연결해서 보고 있어요",
  "이 답변을 바탕으로 한 번 더 확인해볼게요",
  "퀵가이드로 연결해볼게요",
  "지금 고민에 대한 제 답변은 이렇습니다",
  "이 상황에서 부담스러운 지점",
  "퀵가이드",
  "챗봇이 확인하려는 가설",
  "다음 질문이 필요한 이유",
  "이 화면에서 결정할 것",
  "상황 요약 → 공감/직접 답변 → 선배 경험 → 퀵가이드",
  "typeText",
  "appendRenderedItem",
  "removeElement",
  "thinkingLabel",
  "생각을 정리하는 중",
  "관련 경험을 살펴보는 중",
  "실행안으로 압축하는 중",
].forEach((text) => assert(html.includes(text), `Missing text: ${text}`));

[
  "원문 맥락 보기",
  "실행계획에 저장",
  "chatLog.innerHTML=s.messages.length",
].forEach((text) => assert(!html.includes(text), `Old text remains: ${text}`));
