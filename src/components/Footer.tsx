import React from "react";

interface FooterProps {
  color: string;
}

const Footer: React.FC<FooterProps> = ({ color }) => {
  const handleCopy = (number: string) => {
    navigator.clipboard.writeText(number);
    alert(`Número ${number} copiado al portapapeles`);
  };

  return (
    <footer
      className="py-12 px-6 md:px-12 text-center text-white space-y-8"
      style={{ backgroundColor: color }}
      id="contact"
    >

      {/* Teléfonos */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-extrabold uppercase tracking-wide">
          Ordena & Recoge
        </h3>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
          {["614 377 8261", "614 221 8346"].map((num) => (
            <button
              key={num}
              onClick={() => handleCopy(num)}
              className="bg-white text-[#2e1f3f] font-bold text-lg md:text-xl px-6 py-3 rounded-md 
                         shadow-md hover:shadow-lg hover:bg-[#f4f1f8] transition-all"
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Mapa */}
      <div className="mt-8 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1048.947707524255!2d-106.06840965276739!3d28.630184940443243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea5caba003c15d%3A0x89864586483009e2!2sC.%20Segunda%20%26%20C.%2020%20de%20Noviembre%2C%20Bol%C3%ADvar%2C%20Zona%20Centro%2C%2031000%20Chihuahua%2C%20Chih.!5e0!3m2!1ses-419!2smx!4v1759626161702!5m2!1ses-419!2smx"
          width="100%"
          height="350"
          style={{
            border: 0,
            borderRadius: "10px",
            maxWidth: "800px",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Créditos */}
      <div className="text-xs md:text-sm font-bold mt-8 space-y-2">
        <p>&copy; {new Date().getFullYear()} TAEKOOK Boba & Tea. Todos los derechos reservados.</p>

        <p className="text-white">
          Sitio web desarrollado por{" "}
          <a
            href="https://alejandrodelarocha.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline text-[#3a3a3a] hover:text-[#fff200] transition-colors cursor-pointer"
          >
            Alejandro De La Rocha
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
