type TCalculatePointParams = {
  maxPoint: number;
  maxTime: number; //seconds
  answerTime: number; //seconds
};

const PERCENTAGE_DEPENDS_ON_TIME = 20 / 100;
const MIN_TIME_EACH_PHASE = 1;
const MAX_TIME_EACH_PHASE = 5;
export const calculatePoint = (param: TCalculatePointParams): number => {
  try {
    const maxPoint = param?.maxPoint;
    const maxTime = param?.maxTime;
    const answerTime = param?.answerTime;
    if (typeof maxPoint !== "number" || maxPoint <= 0) return 0;
    if (typeof maxTime !== "number" || maxTime <= 0) return 0;
    if (typeof answerTime !== "number" || answerTime < 0) return 0;
    try {
      const maxTimingPoint = maxPoint * PERCENTAGE_DEPENDS_ON_TIME;
      const timeEachPhase = Math.min(MAX_TIME_EACH_PHASE, Math.max(MIN_TIME_EACH_PHASE, maxTime * 0.1));
      const totalPhase = Math.ceil(maxTime / timeEachPhase);
      const answerPhase = Math.ceil((maxTime - answerTime) / timeEachPhase);

      const timingPointEachPhase = maxTimingPoint / totalPhase;

      const basePoint = maxPoint * (1 - PERCENTAGE_DEPENDS_ON_TIME);
      const timingPoint = timingPointEachPhase * answerPhase;
      const point = Math.round(basePoint + timingPoint);
      return point;
    } catch {
      return maxPoint * (1 - PERCENTAGE_DEPENDS_ON_TIME);
    }
  } catch {
    return 0;
  }
};

export const generateArray = (minValue: number, maxValue: number) => {
  try {
    return Array.from({ length: maxValue - minValue + 1 }, (_, i) => i + minValue);
  } catch (error) {
    console.log("🚀 ~ file: array.utils.ts:5 ~ generateArray ~ error:", error);
    return [];
  }
};
