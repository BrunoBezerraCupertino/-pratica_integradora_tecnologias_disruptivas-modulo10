import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';

function Header() {
    // Função para lidar com o clique no botão
    const handleButtonClick = () => {
        alert('Novo projeto foi clicado!');
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: '#2196F3' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
                        Gerenciamento de Projetos
                    </Typography>
                    {/* Adicionando um botão */}
                    <Button
                        color="inherit"
                        startIcon={<AddIcon />}
                        onClick={handleButtonClick}
                    >
                        Novo Projeto
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
