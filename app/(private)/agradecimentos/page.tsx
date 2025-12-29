import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import Image from 'next/image'; // Usando a tag Image do Next.js para otimizar as imagens

const Agradecimentos = () => {
    return (
        <Container>
            {/* Seção de logo */}
            <Box textAlign="center" mb={4}>
                <Image
                    src="/images/GIF.gif"   // O caminho da imagem deve ser colocado de acordo com o seu diretório de imagens
                    alt="GIF DietSync"
                    width={400} // Ajuste conforme necessário
                    height={300} // Ajuste conforme necessário
                />
            </Box>

            {/* Seção de Agradecimentos */}
            <Box textAlign="center" mb={4}>
                <Typography variant="h3" gutterBottom>
                    Agradecimentos
                </Typography>
                <Typography variant="body1" paragraph>
                    O DietSync é fruto do trabalho colaborativo de uma equipe dedicada. Agradecemos a todos que
                    contribuíram para o sucesso deste projeto.
                </Typography>
            </Box>

            {/* Seção de Agradecimentos Especiais */}
            <Typography variant="h4" align="center" mb={4}>
                Agradecimentos Especiais
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Professora Tânia Camila Goulart
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                A melhor professora de matemática e a responsável pelo Projeto de Extensão.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Pedro Sitta (Gordola das Logos)
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Responsável pelas logos e por toda identidade do site.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Agradecimentos;
