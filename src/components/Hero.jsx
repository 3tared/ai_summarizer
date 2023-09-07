import Navbar from './Navbar';

function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <Navbar />
      <h1 className="head_text">
        Summarize Articles With <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc capitalize">
        Summarizing articles is a difficult task. This tool uses OpenAI&apos;s
        latest language model, GPT-4 to summarize your article and give
      </h2>
    </header>
  );
}

export default Hero;
