import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/private-theming';
import { createContext } from 'react';
import { CssBaseline } from '@mui/material';

const TemplateContext = createContext(null);

const TemplateProvider = ({children}) => {
    const theme = createTheme({
        overrides : {
            MuiDialog : {
                paperWidthSm : {
                    maxwidth : 'unset'
                }
            },
            MuiDialogContent : {
                root :{
                    padding : 0,
                    }
                },             
        }
    })

    return (
      
            <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>

            </TemplateContext.Provider>
    )

}

export default TemplateProvider