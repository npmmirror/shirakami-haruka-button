interface VoiceInfo {
    /**
     * 标题翻译
     */
    messages: {
        zh: string
        en?: string
    }
    /**
     * 音声路径。相对于 public/voices 的路径
     */
    path: string
    /**
     * 分类标签，i18n 路径
     */
    tag: string
}
const voices: VoiceInfo[] = [
    {
        messages: {
            zh: '阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴',
            en: 'aba aba aba aba aba aba aba aba aba',
        },
        path: '阿巴阿巴阿巴.mp3',
        tag: 'Tone',
    },
]
export default voices