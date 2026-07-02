import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const html = readFileSync("index.html", "utf8");

[
  "이 프로토타입에서 확인할 것",
  "AI가 답변에 쓴 정보",
  "아직 부족한 정보",
  "왜 이 사례가 추천됐나요?",
  "주의할 차이점",
  "오늘 바로 할 일",
  "실행계획에 표시",
].forEach((text) => assert(html.includes(text), `Missing text: ${text}`));

[
  "원문 맥락 보기",
  "실행계획에 저장",
].forEach((text) => assert(!html.includes(text), `Old text remains: ${text}`));
