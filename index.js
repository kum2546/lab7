function CalculateTicket() {
    const distance = document.getElementById('distance').value;
    const ticketType = document.getElementById('ticketType').value;
    const passengers =document.getElementById('passsengers').value;

    if (!distance || !passengers) {
        document.getElementById('result').innerText = "กรุณากรอกข้อมูลให้ครบถ้วน";
        return;
    }

    // คำนวณค่าตั๋วตามประเภทและจำนวนผู้โดยสาร
    const pricePerKm = parseFloat(ticketType);
    const totalPrice = distance * pricePerKm * passengers;

    document.getElementById('result').innerText = `ราคาทั้งหมด: ${totalPrice.toFixed(2)} บาท`;
    }
