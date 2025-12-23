'use client';

import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
    IconButton
} from '@mui/material';
import {
    Instagram,
    LinkedIn,
    GitHub
} from '@mui/icons-material';

type SocialLinks = {
    instagram?: string;
    linkedin?: string;
    github?: string;
};

type DevCardProps = {
    name: string;
    cargo: string;
    description: string;
    image: string;
    socials: SocialLinks;
};

export default function DevCard({
    name,
    cargo,
    description,
    image,
    socials
}: DevCardProps) {
    return (
        <Card
            sx={{
                width: 320,
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
                border: '2px solid #00e676',
                transition: 'transform .3s',
                '&:hover': {
                    transform: 'translateY(-4px)'
                },
                '&:hover .socials': {
                    bottom: 0
                }
            }}
        >
            {/* IMAGEM */}
            <CardMedia
                component="img"
                height="260"
                image={image}
                alt={name}
            />

            {/* CONTEÚDO */}
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography fontWeight={700} fontSize={18}>
                    {name}
                </Typography>

                <Typography
                    fontSize={12}
                    letterSpacing={1}
                    sx={{ color: '#00e676', mb: 2 }}
                >
                    {cargo}
                </Typography>

                <Typography fontSize={14}>
                    {description}
                </Typography>
            </CardContent>

            {/* REDES SOCIAIS (HOVER) */}
            <Box
                className="socials"
                sx={{
                    position: 'absolute',
                    bottom: -60,
                    left: 0,
                    width: '100%',
                    height: 60,
                    backgroundColor: '#fff',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    transition: 'bottom .3s ease',
                    borderTop: '1px solid #00e676'
                }}
            >
                {socials.instagram && (
                    <IconButton
                        component="a"
                        href={socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Instagram sx={{ color: '#000' }} />
                    </IconButton>
                )}

                {socials.linkedin && (
                    <IconButton
                        component="a"
                        href={socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedIn sx={{ color: '#000' }} />
                    </IconButton>
                )}

                {socials.github && (
                    <IconButton
                        component="a"
                        href={socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHub sx={{ color: '#000' }} />
                    </IconButton>
                )}
            </Box>
        </Card>
    );
}
