const productData = {
  name: "Metronidazole",
  description: "Paracetamol is a medication used to treat fever and mild to moderate pain.",
  batchNumber: "BATCH-001",
  expiryDate: "2026-05-10",
  journey: [
    { 
      stage: "Raw Material Supplier", 
      entity: "ABC Chemicals Ltd.", 
      location: "Mumbai, India", 
      date: "2025-01-05",
      contact: { phone: "+91-9876543210", email: "info@abcchemicals.com" }
    },
    { 
      stage: "Manufacturer", 
      entity: "MediLife Pharma", 
      location: "Delhi, India", 
      date: "2025-01-15",
      contact: { phone: "+91-9812345678", email: "contact@medilifepharma.com" }
    },
    { 
      stage: "Wholesaler", 
      entity: "Global Med Wholesalers", 
      location: "Kathmandu, Nepal", 
      date: "2025-01-25",
      contact: { phone: "+977-9801234567", email: "sales@globalmed.com" }
    },
    { 
      stage: "Distributor", 
      entity: "Nepal Drug Distributors", 
      location: "Pokhara, Nepal", 
      date: "2025-02-01",
      contact: { phone: "+977-9812345678", email: "support@ndd.com" }
    },
    { 
      stage: "Transporter", 
      entity: "SafeTrans Logistics", 
      location: "Across Nepal", 
      date: "2025-02-03",
      contact: { phone: "+977-9807654321", email: "service@safetrans.com" }
    },
    { 
      stage: "Pharmacy", 
      entity: "Healthy Life Pharmacy", 
      location: "Pokhara, Nepal", 
      date: "2025-02-05",
      contact: { phone: "+977-9801122334", email: "care@healthylife.com" }
    }
  ]
};

// Populate product details
document.getElementById("productName").textContent = productData.name;
document.getElementById("productDescription").textContent = productData.description;
document.getElementById("batchNumber").textContent = productData.batchNumber;
document.getElementById("expiryDate").textContent = productData.expiryDate;

// Populate journey timeline
const timelineContainer = document.getElementById("timeline");
productData.journey.forEach((step, index) => {
  const item = document.createElement("div");
  item.classList.add("timeline-item");

  item.innerHTML = `
    <h3>${step.stage}</h3>
    <p><strong>Entity:</strong> ${step.entity}</p>
    <p><strong>Location:</strong> ${step.location}</p>
    <p><strong>Date:</strong> ${step.date}</p>
    <button class="details-btn" data-index="${index}">View Company Details</button>
    <div class="company-details hidden" id="details-${index}">
      <p><strong>Phone:</strong> ${step.contact.phone}</p>
      <p><strong>Email:</strong> ${step.contact.email}</p>
    </div>
  `;
  
  timelineContainer.appendChild(item);
});

// Button click toggle
document.querySelectorAll(".details-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const index = btn.getAttribute("data-index");
    const details = document.getElementById(`details-${index}`);
    details.classList.toggle("hidden");
    btn.textContent = details.classList.contains("hidden") 
      ? "View Company Details" 
      : "Hide Company Details";
  });
});
