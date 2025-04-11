import { useMobileMenu, useThemeColors } from "@/hooks";

export default function BurgerMenuButton() {
    const { isDark } = useThemeColors();
    const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();
    
    return (
        <div className="flex items-center md:hidden">
            <button
                onClick={() => {
                    console.log("Toggling menu"); 
                    toggleMobileMenu();
                }}
                className="p-2 cursor-pointer z-[101]"
                aria-label="Menú de navegación"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="28" 
                    height="28" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke={isDark ? "white" : "black"} 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
        </div>
    )
}