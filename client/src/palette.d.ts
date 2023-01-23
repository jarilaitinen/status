declare module '@mui/material/styles/createPalette' {
    interface Palette {
      mode?: string;
    }
    interface PaletteOptions {
      mode?: string;
    }
  }
  
  export default function createPalette(palette: PaletteOptions): Palette;