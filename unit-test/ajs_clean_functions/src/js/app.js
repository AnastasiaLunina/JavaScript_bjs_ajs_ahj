// jshint esversion:6

export default function characterHealth(obj) {
  if (obj.health > 50) {
    return 'healthy';
  }
  if (obj.health > 15 && obj.health <= 50) {
    return 'wounded';
  }
  return 'critical';
}
