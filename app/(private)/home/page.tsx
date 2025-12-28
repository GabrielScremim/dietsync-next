'use client';
import { Grid } from '@mui/material';
import DevCard from '@/app/components/DevCard';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
   
    return (
                <Grid container spacing={2}>
                    {/* Grid dos cardDev */}
                    <Grid
                        size={{ xl: 8, sm: 6, md: 4 }} >
                        <Grid container spacing={2}>
                            {/* cardDev 1 */}
                            <Grid size={{ xl: 6, sm: 6, md: 4 }} >
                                <DevCard name="Gabriel Vaz Scremim" cargo="Developer" description="Aluno do curso de Ciência da Computação da UniFil - Londrina. Estagiário na Gmaster - Londrina." image="http://152.67.45.167/img/scremim.jpg"
                                    socials={{
                                        instagram: 'https://www.instagram.com/gabrielscremim',
                                        linkedin: 'https://www.linkedin.com/in/gabriel-vaz-scremim-a37b8b231/',
                                        github: 'https://github.com/gabrielscremim'
                                    }} />
                            </Grid>
                            {/* cardDev 2 */}
                            <Grid
                                size={{ xl: 6, sm: 6, md: 4 }} >
                                <DevCard name="Gabriel Segobi de Souza" cargo="Developer" description="Aluno do curso de Ciência da Computação da UniFil - Londrina. Desenvolvedor na Gmaster " image="http://152.67.45.167/img/segobi.jpg" socials={{
                                    instagram: 'https://www.instagram.com/gabrielsegobi_',
                                    linkedin: 'https://www.linkedin.com/in/gabriel-segobi-8a277628b/',
                                    github: 'https://github.com/segobinho'
                                }} />
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Grid para a dieta e treino do dia */}
                    <Grid
                        size={{ xl: 4, sm: 6, md: 4 }}
                    >

                    </Grid>

                </Grid>
    );
}
