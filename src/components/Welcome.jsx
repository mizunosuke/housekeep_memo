import React from 'react'
import styles from "../css/Welcome.module.css";
import intro01 from "../images/intro01.png";
import intro02 from "../images/intro02.png";
import intro03 from "../images/intro03.png";

export const Welcome = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <div><h1>家計簿管理アプリ HOUSURPERKEEPER</h1></div>
            <div>
                <p>今月あと何円使えるっけ・・・</p>
                <p>そんな悩みを解決してくれるハウスーパーキーパー！！</p>
            </div>
        </div>
        <div className={styles.main}>
            <div className={styles.intro}>

                <div className={styles.intro01}>
                    <div className={styles.midashi}><h2>もう怯えなくていい！</h2></div>
                    <div className={styles.image}><img src={intro01} alt="" /></div>
                    <p>「今月こんなにお金使ってたのか・・・」「クレジットカードの引き落とし額エグくね？破産するンゴ・・・」誰もがこんな悩みを抱えたことがあるはず。ハウスーパーキーパーならもう心配要りません！</p>
                </div>

                <div className={styles.intro01}>
                    <div className={styles.midashi}><h2>誰でも簡単な操作で！</h2></div>
                    <div className={styles.image}><img src={intro02} alt="" /></div>
                    <p>使い方のわかりにくアプリは使いたくありませんよね。ハウスーパーキーパーなら誰でも簡単に操作できるよう視覚的にわかりやすい設計になっています。これならカマキリでも家計簿つけちゃうかもね！</p>
                </div>

                <div className={styles.intro01}>
                    <div className={styles.midashi}><h2>セキュリティもばっちり！</h2></div>
                    <div className={styles.image}><img src={intro03} alt="" /></div>
                    <p>「私の懐事情が他の人に漏れたらどうしよう・・・」そんな心配はもういりません。認証機能によって個別管理されたデータはあなたの端末にだけ表示されるようになっています。</p>
                </div>

            </div>
            <div className={styles.signuplogin}>
                <div className={styles.signupbtn}><a href="/signup" className={styles.btn02}>新規登録</a></div>
                <div className={styles.loginbtn}><a href="/login" className={styles.btn02}>ログイン</a></div>
            </div>
        </div>
    </div>
  )
}

