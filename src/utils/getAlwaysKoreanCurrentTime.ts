const getAlwaysKoreanCurrentTime = (): string => {
  return new Intl.DateTimeFormat('ko-KR', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    hour12: false,
  })
    .format(new Date())
    .replace(/\D/g, '');
};

export default getAlwaysKoreanCurrentTime;
