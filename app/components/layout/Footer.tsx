import Image from "next/image";

export default function Footer() {
    return (
        <footer className="">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-10 items-start">
                    <div className="">
                        <Image 
                            src="/applogo.svg" 
                            alt="Jobify Logo" 
                            width={300} 
                            height={90} 
                            className="inline-block mb-4"
                        />
                        <p className="text-xs text-gray-600">Find remote jobs easily</p>
                    </div>
                    <div className="">
                        <h4 className=" font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm items-center justify-center">
                            <li><a href="#" className="">Browse Jobs</a></li>
                            <li><a href="#" className="">Companies</a></li>
                            <li><a href="#" className="">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="">About</a></li>
                            <li><a href="#" className="">Blog</a></li>
                            <li><a href="#" className="">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="">Privacy</a></li>
                            <li><a href="#" className="">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-300 pt-8 flex justify-between items-center">
                    <p className="text-sm font-semibold">&copy; Copyright © 2024. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}