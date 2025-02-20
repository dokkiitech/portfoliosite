import Header from "../../components/Header"

export default function About() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow flex items-center justify-center p-8">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-jp md-6">About Me</h1>
                    <h2 className="text-3xl font-jp mb-6">木戸亮輔 | 28卒</h2>
                    <p className="text-lg font-jp">
                    福岡デザイン＆テクノロジー専門学校<br>
                    </br>ホワイトハッカー専攻<br>
                </br>ハッカソンやCTFに出たりしています。<br>
                </br>北九州市発IT人材コミュニティStepByCode運営しています。<br>
                </br>StepByCodeは「一歩一歩、着実に」成長していきたい、<br>
                </br>学生・社会人のためのコミュニティです！<br>
                </br><a href="https://step-by-code.connpass.com/" target="_blank" rel="noopener noreferrer">
                    <span style={{ color: "blue" }}>connpassイベントページ</span></a>
                </p>
                </div>
            </main>
        </div>
    )
}

