import Slug from "./components/Slug";

const meta = () => {
    const script = "https://jim4563.github.io/vue-meta/main.js";
    const tag = document.createElement('script');
    tag.src = script;

    document.querySelector('div').appendChild(tag);
};


export default { Slug, meta };