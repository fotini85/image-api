
import {createContext,useContext,useState} from 'react';


const AppContext= createContext();


export const AppProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);



 const ToggleDarkTheme = () => {
  const newDarkTheme =  !isDarkTheme;
  setIsDarkTheme(newDarkTheme)
  console.log(isDarkTheme);
 }


    return(
        <AppContext.Provider  value = {{isDarkTheme,ToggleDarkTheme}}> 
            {children}
        </AppContext.Provider>

    )
};
export const useGlobalContext =()=>{
    return  useContext(AppContext)}