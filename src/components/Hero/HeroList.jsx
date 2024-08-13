import Button from "../Button/Button";

function HeroList({ title, content, src, className, href }) {
  const lang = localStorage.getItem("i18nextLng");

  return (
    <>
      <div
        className={`${className} bg-no-repeat flex  items-center pl-12 h-[340px]`}
      >
        <div className="flex flex-col min-w-[200px] gap-3 items-start">
          <h1 className="leading-10">{title}</h1>
          <p> {content}</p>
          {/* <Button className="text-white border-white" /> */}
          <Button color="brown" outline="outline" href={href} />
        </div>
        <div
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "125%",
            backgroundPosition: "right 50% bottom 50% ",
          }}
          className="h-[400px] w-full self-center mx-auto bg-no-repeat hover:hero_animate"
        ></div>
      </div>
    </>
  );
}

export default HeroList;
