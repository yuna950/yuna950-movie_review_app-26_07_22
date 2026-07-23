import { Helmet } from "react-helmet-async";

export default function PageTitle({ title }) {
  return (
    <div>
      <Helmet>
        <title>{`${title} | movie`}</title>
      </Helmet>
    </div>
  );
}
