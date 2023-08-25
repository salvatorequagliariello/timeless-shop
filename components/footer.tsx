
const Footer = () => {


    return (
        <footer className="mt-24 border-t border-primary border-opacity-70 text-primary">
            <div className="mx-auto py-10">
                <p className="text-sm font-light text-center">
                    &copy; {new Date().getFullYear()} Timeless Watch Co., All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;