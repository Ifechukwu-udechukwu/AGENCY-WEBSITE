const ThemeToggleBtn = ({theme, setTheme}) => {
    return ( 
        <>
           <button>
            {theme === "dark" ? (
                <img onClick={()=> setTheme("light")} src="/sun.png" alt="sun" className="size-8.5 p-1.5 border border-gray-500 rounded-full" />
            ) : (
                <img onClick={()=> setTheme("dark")} src="/moon.png" alt="moon" className="size-8.5 p-1.5 border border-gray-500 rounded-full" />
            )}
           </button>
        </>
     );
}
 
export default ThemeToggleBtn;