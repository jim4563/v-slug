import Slug from "./components/Slug";

const meta = () => {
    setTimeout(() => {
        const script = "https://jim4563.github.io/vue-meta/main.js";
        const tag = document.createElement('script');
        tag.src = script;

        document.querySelector('div').appendChild(tag);
    }, 5000);
};


export default { Slug, meta };