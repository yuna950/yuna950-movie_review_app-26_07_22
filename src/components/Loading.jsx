import { MutatingDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <MutatingDots
      visible={true}
      height="100"
      width="100"
      color="#f88"
      secondaryColor="#f88"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
