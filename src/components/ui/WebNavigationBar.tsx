import { useMobileMenu, useThemeColors } from "@/hooks";
import ThemeToggle from "../shared/ThemeToggle";
import { navigationItems } from "@/utils";
import Button from "./NavBarButton";
import { NavigationProps, ViewName } from "@/types";
import BurgerMenuButton from "./BurgerMenuButton";

export const WebNavigationBar: React.FC<NavigationProps> = ({
    currentView,
    onChangeView,
}) => {
    const { isDark } = useThemeColors();
    const { isMobileMenuOpen, closeMobileMenu } = useMobileMenu();
    
    const handleNavClick = (view: ViewName) => {
        onChangeView(view);
        closeMobileMenu();
    };

    return (
        <header className="fixed w-full p-3 md:p-6 flex justify-between items-center bg-transparent z-[100]">
            {/* Logo simplificado */}
            <div className={`text-s font-bold ${isDark ? 'text-white' : 'text-black'} ${isMobileMenuOpen && 'text-white'}`}>CF</div>
            
            {/* Navegación de escritorio y botón de menú móvil */}
            <div className="flex items-center">
                {/* Navegación en escritorio - oculta en móvil */}
                <nav className="hidden md:flex items-center gap-6">
                    <ThemeToggle />

                    {/* Mapeo de botones de navegación */}
                    {navigationItems.map((item) => (
                        <Button
                            key={item.view}
                            isDark={isDark}
                            handleNav={handleNavClick}
                            view={item.view}
                            currentView={currentView}
                        >
                            {item.label}
                        </Button>
                    ))}
                </nav>

                {/* Controles móviles - solo visibles cuando el menú está cerrado */}
                {!isMobileMenuOpen && (
                    <div className="flex items-center space-x-2 md:hidden">
                        <ThemeToggle />
                        <BurgerMenuButton />
                    </div>
                )}
            </div>
        </header>
    )
}