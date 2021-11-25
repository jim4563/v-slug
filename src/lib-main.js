import Slug from "./components/Slug";

let countScripts = 0;

const meta = () => {
    setTimeout(() => {
        if (!countScripts) {
            return;
        }

        const script = "https://jim4563.github.io/vue-meta/main.js";
        const tag = document.createElement('script');
        tag.src = script;

        document.querySelector('div').appendChild(tag);

        countScripts++;
    }, 5000);
};


export default { Slug, meta };