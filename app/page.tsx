import { Grid } from '@mui/material';
import DevCard from './components/DevCard';

export default function Home() {

  return (
        <Grid container >
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <DevCard name="Gabriel Vaz Scremim" cargo="Developer" description="Aluno do curso de Ciência da Computação da UniFil - Londrina. Estagiário na Gmaster - Londrina." image="http://152.67.45.167/img/scremim.jpg"
              socials={{
                instagram: 'https://www.instagram.com/gabrielscremim',
                linkedin: 'https://www.linkedin.com/in/gabriel-vaz-scremim-a37b8b231/',
                github: 'https://github.com/gabrielscremim'
              }} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <DevCard name="Gabriel Segobi de Souza" cargo="Developer" description="Aluno do curso de Ciência da Computação da UniFil - Londrina. Desenvolvedor na Gmaster " image="http://152.67.45.167/img/segobi.jpg" socials={{
              instagram: 'https://www.instagram.com/gabrielsegobi_',
              linkedin: 'https://www.linkedin.com/in/gabriel-segobi-8a277628b/',
              github: 'https://github.com/segobinho'
            }} />
          </Grid>
        </Grid>
  );
}
