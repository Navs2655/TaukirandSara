export function downloadNikahVCard() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Taukir & Sara's Nikah",
    "ORG:Nikah Ceremony",
    "ADR;TYPE=WORK:;;Jumma Masjid, Junadeesa;;;;",
    "NOTE:Nikah - 10th November 2026 (after Zuhr) at Jumma Masjid\\, Junadeesa. Walima - 11th November 2026\\, 12:00 PM at Junadeesa.",
    "END:VCARD",
  ].join("\r\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Taukir-Sara-Nikah.vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
