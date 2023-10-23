import dynamic from "next/dynamic";

const CalculatorPage = dynamic(() => import("@/src/components/calculator-page"), { ssr: false });
export default function Calculator() {
  return <CalculatorPage />;
}
