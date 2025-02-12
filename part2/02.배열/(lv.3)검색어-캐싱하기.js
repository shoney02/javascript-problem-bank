/**
 * [(lv.3)검색어-캐싱하기.js]
 *
 * updateTopKeywords(keywords):
 *   1) 여러 검색어가 들어올 때, 많이 검색된 순으로 상위 10개까지만 저장하세요.
 *   2) 중복 키워드는 1회만 노출되도록 하세요.
 *   3) 기존 캐시를 모두 지우고, 새로운 결과만 캐시에 저장하세요.
 * getTopKeywords():
 *   1) 현재 저장된 상위 10개 키워드를 반환하세요.
 *
 * keywords example : ["banana", "apple", "apple", "orange", "banana", "banana"]
 * @param {string[]} keywords - 검색된 키워드 배열
 * @returns {void}
 */

let topKeywordsCache = [];

function updateTopKeywords(keywords) {
  // TODO
  // 키워드 등장 횟수 계산
  const keywordCount = {};
  keywords.forEach((keyword) => {
    keywordCount[keyword] = (keywordCount[keyword] || 0) + 1;
  });

  // 빈도수 기준 내림차순 정렬 후 상위 10개 키워드 저장
  topKeywordsCache = Object.entries(keywordCount)
    .sort((a, b) => b[1] - a[1]) // 빈도 내림차순 정렬
    .map((entry) => entry[0]) // 키워드만 추출
    .slice(0, 10); // 상위 10개 선택
}

function getTopKeywords() {
  // TODO
  return topKeywordsCache;
}

// export를 수정하지 마세요.
export { topKeywordsCache, updateTopKeywords, getTopKeywords };
