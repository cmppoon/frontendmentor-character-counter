import Logo from "@/app/components/logo";
import Background from "./components/background";
import ThemeSwitcher from "./components/themeSwitcher";
import CharCountPattern from "./components/charCountPattern";
import SentenceCountPattern from "./components/sentenceCountPattern";
import WordCountPattern from "./components/wordCountPattern";

export default function Home() {
  return (
    <main className="pb-8 text-neutral-900 dark:text-neutral-100 sm:pt-8 sm:pb-16 relative">
      <Background />
      <div className="sm:max-w-[990px] sm:mx-auto">
        <div className="p-4 flex justify-between items-center">
          <Logo />
          <ThemeSwitcher className="w-[32px] h-[32px] sm:w-[44px] sm:h-[44px] p-1.5 sm:p-[11px] bg-neutral-100 rounded-md dark:bg-neutral-700" />
        </div>

        <div className="my-10 sm:my-12 sm:mx-[240px] mx-4">
          <h1 className="text-[40px] font-bold text-center leading-none sm:text-[64px] tracking-[-1px]">
            Analyze your text in real-time.
          </h1>
        </div>
        <div className="px-4 flex flex-col items-start space-y-4">
          <textarea
            className="text-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-200 h-[200px] p-3 w-full rounded-xl border-2 border-neutral-500 bg-neutral-400 dark:bg-neutral-800 dark:border-neutral-700 text-[20px] leading-[28px] tracking-[-0.6px] font-normal focus:border-purple-500 focus:ring-0 focus:shadow-text-area resize-none"
            placeholder="Start typing here… (or paste your text)"
          ></textarea>
          <div className="max-sm:space-y-3 sm:flex sm:items-center sm:justify-between w-full">
            <div className="max-sm:space-y-3 sm:flex sm:items-center sm:justify-center sm:gap-x-6">
              <div>
                <input
                  type="checkbox"
                  id="excludeSpaces"
                  name="excludeSpaces"
                  value="excludeSpaces"
                  className="mr-2.5 rounded-[4px] w-4 h-4 border-1 border-neutral-900 bg-transparent dark:border-neutral-200 checked:bg-purple-400 indeterminate:bg-purple-400 focus:ring-2 focus:ring-purple-400 text-purple-400 hover:checked:bg-purple-500"
                />
                <label htmlFor="excludeSpaces">Exclude Spaces</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="characterLimit"
                  name="characterLimit"
                  value="characterLimit"
                  className="mr-2.5 rounded-[4px] w-4 h-4 border-1 border-neutral-900 bg-transparent dark:border-neutral-200 checked:bg-purple-400 indeterminate:bg-purple-400 focus:ring-2 focus:ring-purple-400 text-purple-400 hover:checked:bg-purple-500"
                />
                <label htmlFor="characterLimit">Set Character Limit</label>
              </div>
            </div>
            <p>Approx. reading time: minutes</p>
          </div>
        </div>

        <div className="px-4 mt-10 sm:mt-12 space-y-6">
          <div className="sm:grid sm:grid-cols-3 sm:gap-x-4 sm:w-full max-sm:space-y-4 text-neutral-900">
            
            <div className="p-5 rounded-xl bg-purple-400 h-[130px] relative">
              <h2 className="mb-2 text-[40px] font-bold tracking-tight leading-none">
                00
              </h2>
              <h2 className="text-[20px] leading-[28px] tracking-[-0.6px] font-normal">
                Total Characters
              </h2>
              <CharCountPattern className="absolute top-0 right-0" />
            </div>

            <div className="p-5 rounded-xl bg-yellow-500 h-[130px] relative">
              <h2 className="mb-2 text-[40px] font-bold tracking-tight leading-none">
                00
              </h2>
              <h2 className="text-[20px] leading-[28px] tracking-[-0.6px] font-normal">
                Word Count
              </h2>
              <WordCountPattern className="absolute top-0 right-0" />
            </div>

            <div className="p-5 rounded-xl bg-orange-500 h-[130px] relative">
              <h2 className="mb-2 text-[40px] font-bold tracking-tight leading-none">
                00
              </h2>
              <h2 className="text-[20px] leading-[28px] tracking-[-0.6px] font-normal">
                Sentence Count
              </h2>
              <SentenceCountPattern className="absolute top-0 right-0" />
            </div>
          </div>

          <div>
            <h2 className="text-[24px] leading-[31.2px] tracking-[-1px] font-semibold">
              Letter Density
            </h2>

            <p className="text-[16px] leading-[20.8px] tracking-[-0.6px]">
              No characters found. Start typing to see letter density.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
