function calculateCycle() {
    const lastPeriod = new Date(document.getElementById("lastPeriod").value);
    if (isNaN(lastPeriod)) {
      document.getElementById("result").textContent = "Please enter a valid date 💗";
      return;
    }
  
    const cycleLength = 28; // avg cycle length
    const nextPeriod = new Date(lastPeriod);
    nextPeriod.setDate(lastPeriod.getDate() + cycleLength);
  
    document.getElementById("result").innerHTML = `
      Your next cycle might start around <strong>${nextPeriod.toDateString()}</strong> 🩷<br>
      Be kind to yourself, baby girl 💕
    `;
  }
  function selectMood(emoji) {
    const moodResult = document.getElementById("mood-result");
  
    let message = "";
  
    switch (emoji) {
      case "😊":
        message = "Yayyy, you're glowing today! Keep that smile on, my sunshine! 🌞";
        break;
      case "😔":
        message = "It's okay to feel down, love. I’m holding your heart in mine today 💗";
        break;
      case "🥵":
        message = "You must be feeling drained. Please take it slow, hydrate & rest, my queen 💦👑";
        break;
      case "😭":
        message = "Cry if you need to, dear. I’m wrapping you in the softest hug right now 🫂💓";
        break;
      case "😴":
        message = "Sleepy baby~ Close your eyes and drift into peace. Sweet dreams, angel 😴🌙";
        break;
      default:
        message = "Whatever you feel, I’m always here. You’re not alone 💖";
    }
  
    moodResult.innerHTML = `
      Mood saved: <span style="font-size:1.8rem;">${emoji}</span><br>
      <span class="text-muted d-block mt-2">${message}</span>
    `;
  }
  function logSymptoms() {
    const symptoms = [];
    const checkboxes = document.querySelectorAll("#symptom-form input[type='checkbox']");
  
    checkboxes.forEach(box => {
      if (box.checked) {
        symptoms.push(box.value);
      }
    });
  
    const result = symptoms.length
      ? `Logged: ${symptoms.join(', ')} 💖`
      : "No symptoms selected today, sweetie 🥰";
  
    document.getElementById("symptom-result").innerText = result;
  }

  function generateNote() {
    const notes = [
      "You're doing amazing, even if it doesn't feel like it right now 💗",
      "Take a deep breath... exhale slowly... I'm proud of you for showing up today 🌸",
      "No pressure. Just do what you can. You deserve peace 🤍",
      "You're not alone in this. I'm always here with quiet support 🫶",
      "Even the strongest hearts get tired. Rest is not weakness—it’s love 💤",
      "If today feels heavy, let it be gentle. You don't owe anyone perfection 🕊️",
      "Little steps are still progress. You're growing at your own beautiful pace 💫",
      "The world can wait. Take a moment for yourself right now 💞",
      "Some days just need softness. Let today be one of them 🧸",
      "You're stronger than you think and more loved than you know 🤗",
      "Drink water, stretch, take a breath. You deserve care, my friend 🌷",
      "It’s okay not to be okay. Your feelings matter 💧",
      "One tough day doesn’t define you. You’re doing your best 🌱",
      "You are not a burden. You are a blessing in someone’s life 💝",
      "There’s no need to rush. Healing has its own pace 🌈",
      "Pause. Breathe. Reset. Your peace matters 🧘‍♀️",
      "You’re allowed to feel what you feel without explanation 💓",
      "There’s nothing wrong with needing rest or quiet 💭",
      "You're still worthy on your unproductive days 🛌",
      "Kindness to yourself is the bravest thing you can do 💖",
      "You are not behind. You’re exactly where you need to be ✨",
      "You’re not weak for asking for help. You’re wise 🫂",
      "Your softness is not a flaw. It’s your superpower 🌼",
      "Be gentle with yourself the way you are with others 🫶",
      "Even clouds part. This moment too will pass 🌤️",
      "The way you care for others... you deserve the same 💛",
      "You don’t need to earn rest. You simply deserve it 💆‍♀️",
      "Right now, in this breath, you are enough 🌬️",
      "This is a low, not your forever. You’ll rise again ☀️",
      "Celebrate the small wins. They still count 🏆",
      "Don’t carry it all alone. Let someone hold space for you 🌸",
      "There’s beauty in your resilience, even when it’s quiet 🍃",
      "Let today be slow. Let it be light ☁️",
      "Speak to yourself like someone you love 🪞",
      "You’ve made it through 100% of your worst days 🧩",
      "You matter more than your productivity 💼❌",
      "Even in silence, you’re never alone 🤝",
      "The moon still shines even in darkness 🌙",
      "You are loved, even when you feel unlovable 💗",
      "Peace begins when you stop judging your emotions 🌊",
      "The world is better with you in it 🪷",
      "Today, let go of the shoulds and hold onto what soothes 💆‍♂️",
      "Honor your boundaries. They are acts of love 💫",
      "You don’t need to hide your sadness. You’re safe here 🛡️",
      "You can start again at any moment 💞",
      "No one expects perfection from you. Just care 💟",
      "Hold yourself the way you’d hold someone you love ❤️",
      "Softness is not weakness. It’s sacred 🌹",
      "You are still growing even when it feels like you’re not 🌱",
      "It’s okay to just survive today 🌤️",
      "May your heart feel light and your mind feel calm tonight 💤",
      "I'm proud of you, for everything you've faced in silence 💗"
    ];
  
    const randomIndex = Math.floor(Math.random() * notes.length);
    document.getElementById("note-output").innerText = notes[randomIndex];
  }
  

  
  
  