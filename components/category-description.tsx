
const descriptions = [
    {
        category: "Planetocean",
        description: "Founded in 1832, the famous Swiss watch brand Timeless can boast a long tradition characterised by the elegance and performance of its products. Those values are perfectly represented by the Planetocean Collection. This line is dedicated to men and women looking for a high performance timepiece that combines technical innovation and elegance."
    },
    {
        category: "Seawatcher",
        description: "Without sacrificing elegance, the Seawatcher line perpetuates the spirit of conquest of all those who have dared to go further than others in their quest for new horizons. The same spirit has been behind the models in the Seawatcher collection since 1954. Each watch contains a subtle fusion of performance and elegance, including the most demanding technical features."
    },
    {
        category: "For Her",
        description: "The ladies' watches of the Timeless Collections are the perfect accessory to subtlety exalt the allure and the refinement of all women. Timeless celebrates the beauty of women with delicate lines and timeless aesthetics. "
    },
    {
        category: "Prestige",
        description: "Timeless combines the original aesthetics of its most remarkable historic models with the most modern watchmaking techniques. Prestige pieces are a tribute to the innovative spirit that has driven Timeless’ watchmakers from the outset. Timeless timepieces draw from this expertise and illustrate the durability that is the brand’s signature, as well a consistent desire to honor history."
    },
    {
        category: "Starfinder",
        description: "A silvery moon on a spring night; a star that glistens reaches its peak and then disappears. A symbol of passing time, living time and the moon that entrances us with its rounded, delicate lines the Starfinder is a tribute to this silvery star. Its soft silhouette is enhanced by the exquisite purity of the dial and the whole is illuminated by a play of sparkling diamonds."
    },
    {
        category: "Moonwalker",
        description: "As a traditional watchmaking company, Timeless has been producing exceptional timepieces since the very beginning. Today, the Timeless Moonwalker is the perfect illustration of this corporate ethos, as can be seen from the success enjoyed by this range since it was launched."
    },
    {
        category: "Chrono",
        description: "The launch of the first Chrono by Timeless in 1957 was met with resounding success. Today, this timeless collection can still be found in the brand's range of products in a reworked form. Each fitted with a self-winding calibre, these models will enchant lovers of classic, robust watches. A wide range of dials and a selection of sizes mean that everyone can find the watch that suits him or her."
    },
    {
        category: "All watches",
        description: "Step into a world that carefully blends elegance, tradition and performance, and discover Timeless’ exceptional watches. Each watch collection has its very own style, while remaining true to the timeless elegance that is the core value of the brand. The watchmaking company created for you seven different atmospheres, which will surely enchant those who seek excellence and fine Swiss watchmaking."
    },
]

interface CategoryDescriptionProps {
    category: string;
}

const CategoryDescription: React.FC<CategoryDescriptionProps> = ({
    category
}) => {
    const selectedCategory = descriptions.find(description => description.category === category);

    return (
        <p className="text-center font-primaryb text-primary">
            {selectedCategory?.description}
        </p>
    );
};

export default CategoryDescription;