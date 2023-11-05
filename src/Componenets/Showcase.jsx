import ShowcaseHead from "./ShowcaseHead";
import ShowcaseText from "./ShowcaseText";
import Button from "./Button";

const Showcase = () => {
  return (
    <div className="flex items-center justify-center absolute h-5/6 w-full px-1">
      <section className="flex flex-col items-center justify-center py-20">
        <ShowcaseHead />
        <ShowcaseText />
        <Button title="Download Sermons" />
      </section>
    </div>
  );
};

export default Showcase;
